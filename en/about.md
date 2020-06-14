---
layout: static_page
title: about
lang-ref: about
lang: en

---
# Header 1

Paragraph of shit here it is.

Yes let's see if it can keep two on one side you know it.

# Header 2

This is going to be very difficult I think.

<!-- SNIPPET INFO: YES_NO

* The question and answer variables must remain, but the right and wrong messages are optional, they will use a default if not included.
* If yes (oui) is correct, answer = 1. If no (non) is correct, answer = 0.
  \-->

{% include yes_no.html
question="Is this a yes/no question?"
answer = 1
right_message = "Nice job!"
wrong_message = "Sorry that's wrong!"
%}