---
title: "Voice-First Data Capture: What Car Park Mode Taught Us About AI in the Field"
date: 2026-02-14
description: When we shipped voice-activated data capture for field operatives in construction, we learned something counter-intuitive — the biggest barrier to AI adoption wasn't the technology. It was the assumption that people would change how they worked to use it.
cta:
  heading: Ready to put AI to work in the field?
  body: We design and build voice-first AI workflows using Google Vertex AI and Chirp — turning spoken observations into structured operational data, without changing how your team works.
  buttonText: Talk to Us About AI Workflows
---

The brief, when it first arrived, sounded almost trivial: make it easier for field representatives to log notes after a customer visit.

The existing process was a regime of deferred work. Representatives would visit five or six accounts in a day, return to their car between stops, and try to reconstruct the detail of each conversation from memory onto a form that had to be completed before the end of the day. Important nuance — a customer's reluctance to place a large order, a competitor's new offering mentioned in passing, an upcoming project that hadn't been formally scoped — was routinely lost.

The problem wasn't motivation. The problem was timing and interface. Nobody logs structured data accurately on a phone while sitting in a car park immediately after a meeting.

## The Insight That Changed the Brief

The key insight came from watching how representatives actually managed the problem. Most of them had a voice memo on their phone — not linked to any system, not structured, not searchable — where they'd record a quick verbal note while the conversation was still fresh. Then they'd transcribe it later.

They had already solved the capture problem. They just hadn't solved the structure problem.

The real brief became: can we make an unstructured voice note automatically become structured, synchronised ERP data, without the representative doing anything more than they were already doing?

## The Architecture: Voice to Data

The solution we built — internally referred to as Car Park Mode — uses Google's Vertex AI with the Chirp speech model as its core transcription and understanding layer.

The flow is:

1. The representative finishes a customer visit and opens the app
2. They tap a single button and speak naturally for thirty seconds to two minutes — describing the visit, any relevant account detail, follow-up actions, commercial observations
3. The app transcribes the audio in near-real time
4. A structured extraction pass identifies entities: account name, contact name, sentiment indicators, follow-up actions, product mentions, competitor references
5. The extracted structure is written back to the appropriate fields in the CRM/ERP sync layer, with the raw transcript attached for context

The representative reviews a one-screen summary, corrects anything obviously wrong, and submits. Total additional time: under sixty seconds.

## What We Learned About Field AI Adoption

**The interface has to meet the user where they are, not where you want them to be.** A button that says "Tap to Speak" requires no training, no change in routine, and no cognitive overhead. Adoption was immediate.

**Structured output requires careful prompt engineering.** The gap between "transcribe what someone said" and "extract meaningful, consistent CRM fields from a conversational description of a customer meeting" is significant. The extraction layer required iteration — calibrated against real representative speech patterns, not synthetic test data.

**Offline capability is non-negotiable, even for AI features.** Early versions required connectivity for the transcription step. This broke the core use case — car parks frequently have limited signal. We moved transcription local for the initial capture, with cloud processing on sync. Users saw no difference in their experience; the reliability improved substantially.

**Confidence scoring changes the review behaviour.** When the structured extraction shows a confidence level alongside each field, representatives engage with the review step differently. A high-confidence extraction is glanced at and confirmed. A low-confidence extraction prompts genuine review and correction. The data quality output is significantly better than a system that presents everything with equal authority.

## Beyond Note Capture

The patterns we developed for Car Park Mode have broader applicability across field operations. Voice-first data capture is useful anywhere you have:

- High-frequency, low-duration data entry events
- Users whose primary mode of work is physical, not digital
- Data that is most accurate the moment an event occurs
- A mismatch between when data is needed and when it's convenient to enter it

Delivery drivers confirming drop conditions. Site managers logging daily progress against programme. Branch operatives flagging stock anomalies. The interface constraint is the same; the extraction patterns vary.

## The Maturity of the Technology

Two years ago, the accuracy of speech-to-text in challenging acoustic environments — a car with traffic noise, a site with machinery in the background — was not reliable enough to build production workflows on. Chirp changed that. The model handles accents, background noise, and the particular verbal rhythm of people narrating professional observations with a fidelity that now justifies production use.

AI in the field is no longer a demonstration of what might be possible. For the right workflows, it's the most practical solution available.

The bar is simply this: does it reliably do something useful without requiring the user to change how they already work? If the answer is yes, deploy it.
