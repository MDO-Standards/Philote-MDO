---
sidebar_position: 4
title: Implicit Disciplines
---

# Implicit Disciplines

Implicit disciplines are based on the discipline service, like the explicit
disciplines. They also use composition and are defined as:

```protobuf
service ImplicitService {
    // Calls the discipline Compute function
    rpc ComputeResiduals(stream Array) returns (stream Array) {}

    // Calls the discipline RPC that solves the nonlinear equations
    rpc SolveResiduals(stream Array) returns (stream Array) {}

    // Calls the discipline ComputePartials function
    rpc ComputeResidualGradients(stream Array) returns (stream Array) {}
}
```

## ComputeResiduals

The ComputeResiduals function evaluates the residual given a set of inputs.

## SolveResiduals

The SolveResiduals function solves the residual (drives it to zero) and returns
the discipline outputs for that state.

## ComputeResidualGradients
The ComputeResidualGradients function computes the derivatives of the
ComputeResiduals function.
