---
sidebar_position: 1
title: Introduction
---

# Introduction

Philote is a datastructure and communication standard for distributed
multidisciplinary design optimization (MDO) frameworks. As it is merely a
datastructure and communication standard, it can be applied to a variety of MDO
frameworks. An example of this are the Computational System Domain Language
([CSDL](https://lsdolab.github.io/csdl/)) and [OpenMDAO](https://openmdao.org)
interfaces implemented in the Philote-Python bindings (see Supported Languages),
which enable those frameworks to call remote analysis disciplines.


## Motivation

A central aspect Philote addresses is decentralized computing. This requires a
set of definitions for creating and communicating with decentralized
disciplines. Moreover, Philote is intended to be a standard that supports many
MDO frameworks. Ubiquitous support of frameworks enables discipline developers
to develop *one* MDO interface that can be used with many MDO frameworks,
thereby decoupling the framework and discipline development cycles.

Being decentralized requires a means of communication between the main
framework and the individual analysis disciplines. Moreover, the individual
disciplines may use a plethora of programming languages, some of which may not
easily wrap into Python, as required by both CSDL and OpenMDAO. Therefore,
Philote aims to define a standard for a server/client model for analysis
disciplines using [gRPC](https://grpc.io/). Using gRPC enables the
autogeneration of the required services and datastructures in a variety of
languages. Philote, however, does not provide implementation beyond the protocol
buffer ([protobuf](https://developers.google.com/protocol-buffers/))
definitions.

The definition of a data and communications standard allows Philote to be used
beyond any one MDO tool. The absence of implementation beyond the auto-generated
code allows for flexibility of use and development. However, the goal is to
provide enough of an auto-generated template for analysis tool developers to
easily implement MDO disciplines and couple them into a large variety of
frameworks using the same communication mechanism. A number of examples can be
found under the Supported Languages page.


## Origin of the Project Name

Inevitably, people ask about the origin of project names, especially if they
aren't obviously discernable. The name "Philote" was chosen because of its
relationship to the ansible network in Orson Scott Card's Ender novels (Ender's
Game, Speaker for the Dead, etc.). In the series, Philotes are the most
elementary building block in the universe and are used to enable faster than
light communications over vast distances via the ansible network.
