---
sidebar_position: 2
title: License and Philosophy
---

# License and Philosophy

Philote is licensed under the Apache 2 license:

```text
Copyright 2022-2025 Christopher A. Lupp

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

The rest of this page aims to give some context why the Apache license was
chosen and what ramifications it has.

:::note
I am not an intellectual property lawyer (or any type of lawyer, for that
matter). I have tried to put down my interpretations of how Philote's licensing
influences decision making in the context of a larger MDO problem. These should
be viewed as commentary and my interpretation; under no circumstances should the
following sections be viewed as legal advice. The only thing I can say with
legal certainty is that Philote is licensed under the Apache 2 license. If you
have have questions or concerns regarind intellectual property, please talk to a
qualified legal professional.
:::


## Philosophy

Licensing is an important topic in software, especially for tools that are meant
to be used within larger frameworks. Because licensing can be a reason for or
against using a piece of software, this section provides a brief overview of the
license governing the use of Philote and why this particular license was chosen.

Philote is licensed under the Apache version 2 open-source license. This enables
Philote to be used freely, `without concerns about copyleft (viral)
licensing`. While copyleft licenses serve a purpose, in this case, they could
stand in the way of adoption of Philote. For example, a proprietary vendor would
almost certainly refuse to use Philote if it forced them to distributed their
software as open source. At the same time, the Apache license also is a very
`permissive license` that allows you to use Philote in proprietary (commonly
referred to as `closed source`) software.


## Ramifications of Using Philote on Licensing

As mentioned, the Apache 2 license is a pretty permissive, so using Philote
within proprietary software does not affect that software's licensing outside of
the requirement to reproduce the above license notice (only within the licensed
work, i.e., Philote source). Furthermore, the Apache 2 license is also
compatible with the GNU Public License version 3 (GPL 3), probably the most
widely used copyleft license, so GPL3 analyses can still be accessed using
Philote.

In fact, GPL 3 licensed disciplines are an interesting case that merit
discussion. In a monolithic MDO framework, such as OpenMDAO, using a GPL3 code
in the context of an optimization problem will require all other licensed
software to be GPL compatible (in the event that the problem is distributed to
another party). Furthermore, the entire setup script (OpenMDAO is written in
Python) must be licensed under the GPL3 (hence the term viral licensing). This
might not always be a problem, but could pose challenges if the optimization
problem must be shared across organizational boundaries (i.e., sharing with
another company), as `no proprietary license could be applied` at that point.

Using `Philote actually alleviates` this last case. Because the source code of
the GPL 3 software never is combined with others (other than Philote) to create
a `derivative work`. This is true, as the GPL 3 does not affect network
communications. As such, the remaining software used in the optimization
does not need to be GPL compatible and the optimization problem itself does not
automatically need to be licensed under the GPL 3. As you can see, this
decentralized approach to MDO has more than just positive technical
ramifications. While this is true for GPL 3, please keep in mind that other
licenses (such as the AGPL), have other stipulations for which the above is not
true.
