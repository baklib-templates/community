import { Controller } from "@hotwired/stimulus"

// Report abuse feedback form (adapted from cms/products quote_feedback_controller).
// Custom fields are validated client-side and concatenated into the single
// hidden platform feedback message field, then submitted via fetch + turbo-stream.
export default class extends Controller {
  static targets = [
    "category",
    "url",
    "contact",
    "message",
    "messageField",
    "categoryError",
    "urlError",
    "messageError",
    "formError",
    "submit",
    "submitLabel",
    "submittingLabel",
  ]

  submit() {
    this.hideErrors()

    const errors = {}
    if (!this.selectedCategory()) errors.category = true
    if (!this.urlTarget.value.trim()) errors.url = true
    if (!this.messageTarget.value.trim()) errors.message = true

    if (Object.keys(errors).length) {
      this.showFieldErrors(errors)
      return
    }

    this.send()
  }

  selectedCategory() {
    if (!this.hasCategoryTarget) return ""
    const checked = this.categoryTargets.find((el) => el.checked)
    return checked ? checked.value : ""
  }

  async send() {
    const form = this.element.querySelector("form")
    if (!form) return

    this.setSubmitting(true)
    this.messageFieldTarget.value = this.assembleMessage()

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "text/vnd.turbo-stream.html",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "same-origin",
      })

      const body = await response.text()
      if (
        /<turbo-stream/i.test(body) &&
        window.Turbo &&
        typeof window.Turbo.renderStreamMessage === "function"
      ) {
        window.Turbo.renderStreamMessage(body)
      }

      if (response.ok) {
        this.resetForm()
      } else {
        this.showFormError()
      }
    } catch (error) {
      this.showFormError()
    } finally {
      this.setSubmitting(false)
    }
  }

  assembleMessage() {
    const labels = {
      rude_or_vulgar: "Rude or vulgar",
      harassment: "Harassment or hate speech",
      spam: "Spam or copyright issue",
      other: "Other",
    }
    const lines = ["[Report Abuse]"]
    const category = this.selectedCategory()
    const url = this.urlTarget.value.trim()
    const contact = this.hasContactTarget ? this.contactTarget.value.trim() : ""
    const message = this.messageTarget.value.trim()

    if (category) lines.push("Category: " + (labels[category] || category))
    if (url) lines.push("URL: " + url)
    if (contact) lines.push("Contact: " + contact)
    if (message) lines.push("Message:\n" + message)

    return lines.join("\n")
  }

  showFieldErrors(errors) {
    if (errors.category && this.hasCategoryErrorTarget) {
      this.categoryErrorTarget.classList.remove("hidden")
    }
    if (errors.url) {
      this.urlErrorTarget.classList.remove("hidden")
      this.urlTarget.setAttribute("aria-invalid", "true")
    }
    if (errors.message) {
      this.messageErrorTarget.classList.remove("hidden")
      this.messageTarget.setAttribute("aria-invalid", "true")
    }
    const first =
      (errors.category && this.hasCategoryTarget && this.categoryTargets[0]) ||
      (errors.url && this.urlTarget) ||
      this.messageTarget
    if (first && typeof first.focus === "function") first.focus()
  }

  hideErrors() {
    if (this.hasCategoryErrorTarget) this.categoryErrorTarget.classList.add("hidden")
    if (this.hasUrlErrorTarget) {
      this.urlErrorTarget.classList.add("hidden")
      this.urlTarget.setAttribute("aria-invalid", "false")
    }
    if (this.hasMessageErrorTarget) {
      this.messageErrorTarget.classList.add("hidden")
      this.messageTarget.setAttribute("aria-invalid", "false")
    }
    if (this.hasFormErrorTarget) this.formErrorTarget.classList.add("hidden")
  }

  showFormError() {
    if (this.hasFormErrorTarget) this.formErrorTarget.classList.remove("hidden")
  }

  resetForm() {
    this.categoryTargets.forEach((el) => {
      el.checked = false
    })
    if (this.hasContactTarget) this.contactTarget.value = ""
    this.messageTarget.value = ""
    this.messageFieldTarget.value = ""
  }

  setSubmitting(state) {
    this.submitTarget.disabled = state
    if (this.hasSubmitLabelTarget) this.submitLabelTarget.classList.toggle("hidden", state)
    if (this.hasSubmittingLabelTarget) this.submittingLabelTarget.classList.toggle("hidden", !state)
  }
}
