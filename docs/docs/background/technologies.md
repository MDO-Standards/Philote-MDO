---
sidebar_position: 2
title: Technology
---

# Technology

Philote is built on top of Protocol Buffers (protobuf) and gRPC. Both of these
tools were first developed inside Google and then open sourced. These libraries
are very popular, have large communities, and enjoy widespread use, especially
in the cloud computing space.

## Protobuf

Protocol Buffers, often referred to as Protobuf, is a widely-used binary
serialization format developed by Google that serves as a fundamental technology
for data interchange in software systems. Protocol Buffers enable the efficient
encoding and decoding of structured data, making it an convenient for
transmitting and persisting data across various applications, languages, and
environments.

At its core, Protobuf defines a language-agnostic schema for data structures
using a human-readable and language-neutral interface definition language (IDL).
This schema specifies the structure and types of data to be serialized, allowing
developers to define their data models with precision. With its compact binary
format and efficient encoding and decoding processes, Protocol Buffers offer
significant advantages in terms of speed, size, and compatibility compared to
traditional text-based serialization formats like XML or JSON. This makes
Protobuf an essential technology for improving data exchange in software
systems, particularly when performance and interoperability are critical
concerns.

## gRPC

gRPC is a high-performance and language-agnostic remote procedure call (RPC)
framework also developed by Google and since open-sourced. It is designed to
facilitate efficient and scalable communication between distributed systems,
making it a pivotal technology in modern software architecture.

gRPC relies on Protocol Buffers as its interface definition language (IDL) for
defining both the service methods and the data structures exchanged between
client and server. This combination of gRPC and Protocol Buffers provides a
type-safe way to define remote services and the messages they use. One of gRPC's
standout features is its support for several programming languages, allowing
developers to seamlessly connect and interact between different platforms and
environments. It utilizes HTTP/2 as the transport protocol, offering
multiplexing, flow control, and other performance optimizations. Moreover, gRPC
provides built-in features such as authentication, load balancing, and error
handling, making it a powerful choice for building efficient, robust, and
cross-platform microservices and APIs in modern software applications.
