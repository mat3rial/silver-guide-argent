---
layout: page
title: templates
lang-ref: templates
lang: en
permalink: "/en/toolkit/templates/"

---
This is the templates page.

<!-- SNIPPET INFO: ACCORDION EXAMPlE  **You can delete these notes after referencing!**
\-->

{% include accordion_example.html
example_text="Here is the templates page."
%}

<!-- SNIPPET INFO: YES_NO  **You can delete these notes after referencing!**

* The question and answer variables must remain, but the right and wrong messages are optional, they will use a default if not included.
* If yes (oui) is correct, answer = 1. If no (non) is correct, answer = 0.
  \-->

{% include yes_no.html
question="Is this a yes/no question?"
answer = 1
yes = "Nice job!"
no = "Sorry that's wrong!"
%}

[\[\]()](https://github.com "Github")