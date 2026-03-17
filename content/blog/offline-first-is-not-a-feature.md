---
title: "Offline-First is Not a Feature. It's a Requirement for Field Software in Construction."
date: 2026-03-05
description: Building software for field sales teams and site operatives means accepting one fundamental constraint most developers ignore — the network isn't always there. Here's why offline-first architecture isn't optional for construction field apps.
cta:
  heading: Building software for field teams?
  body: We build offline-first Progressive Web Apps for construction field operations — applications that work at full speed whether your team is on a city site or a rural branch with no signal.
  buttonText: Discuss Your Field App
---

There's a particular type of software failure that's uniquely humiliating: the kind that happens in front of a customer.

A field sales representative pulls up their order management app in a builder's merchant car park. The app spins. The spinner keeps spinning. The customer, who just wants to know if twenty pallets of facing brick are available, is watching.

The network dropped thirty seconds ago. The app has no idea what to do.

## Why "Just Add a Loading State" Isn't an Answer

The default response from most development teams to connectivity issues is defensive UI: show a loading spinner when offline, display an error message, prevent submission. This treats connectivity as an exception state to be handled, rather than a fundamental characteristic of the environment to be designed around.

For office workers, this is probably fine. Networks fail rarely, and for short durations.

For a field representative driving between branches and customer sites across the country — or a site operative working in a basement or a basement carpark of a commercial development — offline is not an edge case. It's Tuesday morning.

The question isn't "what do we do when the network fails?" The question is "how do we build a system that works regardless of whether the network is present?"

## The Architecture of Offline-First

A genuine offline-first Progressive Web App is architecturally different from a regular web application with offline error handling bolted on. The distinction is in where state lives and when synchronisation happens.

**In a conventional web app**, the server is the source of truth. The client requests data, displays it, and sends changes back. Without a network connection, the client is blind.

**In an offline-first PWA**, the local device is the source of truth for the user's current working context. A service worker maintains a local cache of the data the user needs — their customer accounts, product catalogue, pricing, stock availability, order history. The application reads from this local store, not from the server.

When the user creates a quote, places an order, or logs a note, that action is written to the local store immediately. The UI responds instantly. A background sync queue then pushes those changes to the server when connectivity resumes — transparently, without the user needing to do anything.

## The SalesHub Deployment

When we built the SalesHub field application for Travis Perkins, we were deploying to hundreds of external representatives operating across the UK. Their environments ranged from modern offices with reliable Wi-Fi to distribution yards in rural locations where 4G coverage was unreliable at best.

The brief was unambiguous: the application had to work everywhere, all the time, with or without connectivity.

The solution used a service worker architecture with:

- **Aggressive pre-caching** of the representative's relevant customer and product data during sync windows (typically at app launch on a reliable connection)
- **Optimistic writes** — every action the user takes is reflected in the UI immediately, queued locally, and reconciled with the server asynchronously
- **Conflict resolution logic** for the rare cases where a record had been modified server-side during an offline session
- **Background sync triggers** that detect connectivity restoration and flush the queue without user intervention

From the representative's perspective, the application simply works. They don't think about connectivity. They don't get spinners. They don't have to retype a quote because the network dropped before submission.

## The Commercial Argument

Field software that fails in the field is worse than no software. It erodes adoption. Representatives revert to phone calls and spreadsheets — the very workflows the technology was meant to replace.

Offline-first architecture is not a premium feature for complex applications. It's the baseline requirement for any software that's expected to function in the environments where construction actually happens.

If you're commissioning field software and the technical specification doesn't mention service workers, sync queues, or local state management — ask why not.

The answer will tell you whether you're talking to a team that's built for your environment, or a team that's hoping no one checks the car park signal strength.
