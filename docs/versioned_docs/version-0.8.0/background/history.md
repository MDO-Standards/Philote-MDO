---
sidebar_position: 1
title: Historical Background
---

# Historical Background

Distributed computing in and for itself is not new. Tools like MPI and a variety
of RPC frameworks have existed for some time. In the MDO space, SORCER/MSTC
Engineering pioneered concepts of a client/server architecture for
multidisciplinary optimization problems. It is based on Apache River and written
largely in Java. Another tool developed at AFRL, Hermes (developed by Rich
Snyder), aimed to simplify the development of analysis disciplines. It also
employed a client-server architecture, but used zeroMQ for communication. It
provided a compiler to create stubs which developers could use to create
analysis servers.

Philote was certainly was influenced by both of these efforts, due to their
origin within the Multidisciplinary Science and Technology Center (AFRL/MSTC).
In many ways, Hermes could be seen as a closely related predecessor (at least in
philosophy), with Philote instead using gRPC to generate stubs. Despite this,
Philote is a clean sheet effort and specific data and design decisions were made
based on mathematical requirements of optimization problems without specific
influence of past efforts.
