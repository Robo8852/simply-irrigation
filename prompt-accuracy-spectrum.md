# Prompt Accuracy Spectrum

How closely your prompt language maps to what the LLM actually does mechanically,
and when to use each level.

```
                    OUTPUT QUALITY vs PROMPT ACCURACY

                              ★ SWEET SPOT (6-7)
                            /                \
                          /                    \
                        /                        \
                      /                            \
                    /                                \
                  /                                    \
                /                                        \
              /                                            \
            /                                                \
          /                                                    \
        /                                                        \
      /                                                            \

  1  2  3  4  5  6  7  8  9  10  11  12

  METAPHORICAL              SWEET              MECHANICAL
  (human words)             SPOT               (technical)
```

---

## Level 1 — Vibes Only

> **"Do the thing"**

- Zero context, zero specificity
- Model guesses entirely from training priors
- Best for: when you don't care what you get

---

## Level 2 — Pure Metaphor

> **"Calculate my intent"**

- Human concept that doesn't map to the model's mechanics
- Works loosely by triggering reasoning-adjacent output
- Best for: quick, low-stakes prompts

---

## Level 3 — Directed Metaphor

> **"Read my mind — what do I really want here?"**

- Still metaphorical but pointed at a goal
- Triggers the model to consider the gap between what you said and what you meant
- Best for: brainstorming, open-ended exploration

---

## Level 4 — Accurate Verb, Fuzzy Target

> **"What are you inferring from my intent?"**

- "Inferring" maps closer to the real operation
- "Intent" is still a human abstraction
- Best for: general prompting, conversational back-and-forth

---

## Level 5 — Accurate Verb, Accurate Target

> **"What are you inferring from my message and this conversation so far?"**

- Drops "intent" — points at actual inputs (message + conversation)
- Still uses "inferring" which is close enough
- Best for: code tasks, planning, most daily work

---

## Level 6 — Sweet Spot (Lower)

> **"What are you inferring from my message and surrounding context?
> Surface your assumptions before responding."**

- Adds assumption surfacing — forces the model to show its work
- Generated assumptions become part of context, steering better output
- Best for: multi-step tasks, anything where getting it wrong is costly

---

## Level 7 — Sweet Spot (Upper)

> **"Given my message, conversation history, and any files or context you have access to:
> What are you inferring? What are you assuming where you have no signal?
> State both, then respond."**

- Explicitly separates inferences (from signal) from assumptions (from gaps)
- This distinction is where most errors live
- Best for: architecture decisions, debugging, complex problem-solving

---

## Level 8 — Precise

> **"Given my message, conversation history, project files, and system instructions,
> what patterns are you matching on? What assumptions are those patterns producing?
> Where do you have no signal and are filling gaps?
> State all of this, then generate your response conditioned on it."**

- Introduces "pattern matching" — closer to what the model actually does
- Explicitly asks the model to condition output on its own stated reasoning
- Best for: code review, refactoring, multi-file changes

---

## Level 9 — Technical

> **"Given the full context in your context window — my message, prior turns,
> system prompt, and retrieved file content — identify what you're extrapolating
> from provided context versus what you're filling from training data.
> Prioritize context-derived outputs. Flag low-confidence areas."**

- Distinguishes between context-driven output and training-prior output
- This is the actual source of most hallucination
- Best for: research, fact-sensitive tasks, technical writing

---

## Level 10 — Full Mechanical

> **"Given the full token sequence in your context window, describe the probability
> weightings your parameters are producing. Identify where context is sparse and
> you are extrapolating from training distribution rather than provided context.
> Separate high-confidence pattern matches from low-confidence gap fills.
> Generate your response prioritizing provided context over training priors."**

- Maximum mechanical accuracy
- Verbose but produces extremely self-aware output
- Best for: detailed documentation, technical specifications, ADRs

---

## Level 11 — Exhaustive Mechanical

> **"Given the full token sequence in your context window — including my message,
> all prior conversation turns, system prompt, retrieved file content, and tool
> results — perform the following before generating output:
> 1. Enumerate the distinct signals present in my message
> 2. Enumerate relevant context from prior turns and files
> 3. Identify where signal density is low and you would rely on training priors
> 4. For each low-signal area, state the prior you would default to
> 5. Separate your response into: context-supported claims, training-supported
>    claims, and speculative gap-fills
> 6. Generate your final output, weighting context-supported claims highest"**

- Step-by-step mechanical self-audit before output
- Very high token cost but produces output with built-in confidence ratings
- Best for: audit trails, compliance docs, anything requiring traceability

---

## Level 12 — Total Mechanical Decomposition

> **"Given the full token sequence in your context window, before generating any
> output, perform a complete decomposition:
> 1. Parse my message into discrete informational units and questions
> 2. For each unit, identify matching patterns from: (a) this conversation,
>    (b) retrieved files, (c) system instructions, (d) training distribution
> 3. Rank each source by relevance and recency
> 4. Where multiple sources conflict, flag the conflict and state which you
>    are weighting higher and why
> 5. Identify every assumption you are making that is not directly supported
>    by provided context — state each one explicitly
> 6. Identify what context, if provided, would change your output significantly
> 7. Generate your response, annotating each major claim with its source
>    (context vs training vs assumption)
> 8. End with a confidence assessment and a list of questions that would
>    improve your output if answered"**

- Total transparency — every claim sourced, every assumption visible
- Highest token cost, highest mechanical accuracy
- Best for: generating verbose documentation, specifications, technical manuals,
  architecture guides, regulatory documents, or any output where complete
  traceability and self-awareness are worth the token investment

---

## When to Use What

| Level | Name | Use When |
|-------|------|----------|
| 1 | Vibes Only | You don't care, just want something |
| 2 | Pure Metaphor | Quick casual prompts |
| 3 | Directed Metaphor | Brainstorming, exploration |
| 4 | Accurate Verb, Fuzzy Target | General conversation |
| 5 | Accurate Verb, Accurate Target | Daily code tasks |
| 6 | Sweet Spot (Lower) | Multi-step tasks, moderate stakes |
| 7 | Sweet Spot (Upper) | Complex decisions, debugging |
| 8 | Precise | Code review, refactoring |
| 9 | Technical | Research, fact-sensitive work |
| 10 | Full Mechanical | Detailed docs, specs |
| 11 | Exhaustive Mechanical | Audit trails, compliance |
| 12 | Total Decomposition | Verbose docs, full traceability |

The right level matches the task. The spectrum isn't good-to-bad —
it's lightweight-to-thorough. Match your prompt investment to your
output requirements.
