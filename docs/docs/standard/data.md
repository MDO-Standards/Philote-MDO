---
sidebar_position: 1
title: Data Representation
---

# Data Representation

This section describes the data conventions provided by Philote.



## Array Types

Philote provides two different types of arrays: one for continuous and the other
for discrete data. Any variable that gradients are required for must be defined
as continous data. The datatype for continuous data is the `DoubleArray`:

```protobuf
message Array {
    // array name (optional)
    string name = 1;

    // array sub-name (optional)
    string subname = 2;

    // starting index
    int64 start = 3;

    // ending index
    int64 end = 4;

    // flag for if this is an input or output
    VariableType type = 5;

    // continuous data
    repeated double data = 6;
}
```

It describes an n-dimensional array by providing the array shape as a list of
integers. The array data is saved as a single dimensional array (serialized) of
double precision values.

:::note
By convention, Philote arrays are described in `row major` order.
:::


## Meta Data

In addition to variable analysis data, meta data is needed for many MDO
frameworks to define variable dimensions/shape as well as identify variable
units. Philote defines a datatype to describe required meta data,
`VariableMetaData`:

```protobuf
message VariableMetaData {
    // enum to identify the variable type
    VariableType type = 1;

    // variable name
    string name = 3;

    // variable shape
    repeated int64 shape = 4;

    // variable units
    string units = 5;
}
```

This includes the variable name, the shape/dimensions of the variable, and
variable units as a string (units must be consistent across an n-dimensional
variable). This datatype is sent to the framework during the setup phase and
enables the MDO framework to define and allocate the inputs and outputs. Note
the bool flag that denotes if the variable is an input or output (true denotes
an input).


Finally, meta data for partials is represented in the following message type:

```protobuf
message PartialsMetaData {
    // variable name
    string name = 1;

    string subname = 2;

    repeated int64 shape = 3;
}
```
