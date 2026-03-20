type DataLayerEvent = Record<string, unknown>;

function push(event: DataLayerEvent) {
  if (import.meta.server) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackCtaClick(ctaName: string, ctaLocation: string) {
  push({ event: "cta_click", cta_name: ctaName, cta_location: ctaLocation });
}

export function trackFormStart() {
  push({ event: "form_start", form_name: "contact" });
}

export function trackFormFieldInteract(fieldName: string) {
  push({
    event: "form_field_interact",
    form_name: "contact",
    field_name: fieldName,
  });
}

export function trackFormSubmit() {
  push({ event: "form_submit", form_name: "contact" });
}

export function trackFormAbandon(lastField: string) {
  push({
    event: "form_abandon",
    form_name: "contact",
    last_field: lastField,
  });
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
