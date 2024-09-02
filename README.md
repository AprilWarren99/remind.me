# Remind.Me

This is a personal project I'm using to get some more practice with React. It's not supposed to be used in any sort of production environment. It is intended to be a more involved project than a basic todo app and a launching point into side projects for me.

## Goals

### Authentication

Remind.ME is hopefully going to be my first time integrating auth into a system. It is likely to use Pocketbase to achieve this; though that's undecided right now. It's also going to tie in 0Auth from providers like Facebook and Google.

### 3rd Party Systems

Remind.ME will hopefully be able to send reminders via SMS and email, implementation plans for this is unknown at time of creation but will be implemented as needed. This is a important learning step for me as it is integral for so many projects.

## Features

Remind.ME will be split into two base-level data types, Reminders and Lists. Reminders are going to take a time, date, title, etc. and be able to remind you of the relevant information at your requested time via many optional methods; such as in-browser alerts, email, and SMS.

Lists are intended to be a rendition on the typical shopping list app with optional ability to assign reminders to lists or list items.