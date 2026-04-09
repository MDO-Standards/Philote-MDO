---
sidebar_position: 3
title: Release Notes
---

# Release Notes

## Versions 0.5.2

Readme changes only to make documentation discoverable.

### Features

- None

### Bug Fixes

- Added link to documentation to project readme
- Renamed project title in readme (was old placeholder)


## Versions 0.5.1

This version only fixes missing public release information in preparation for
making the project public.

### Features

- None

### Bug Fixes

- Added public release information

## Versions 0.5.0
This version revises the implicit discipline API, cleans up unused data fields
and expands/revises the documentation.

### Features

- Revised documentation
- Revised implicit discipline API

### Bug Fixes

- Cleaned up protobuf message fields to remove unused definitions.

## Versions 0.4.0
This version restructures the Philote MDO standard. A hierarchy was developed to avoid code duplication:

- Base discipline service. This service is responsible for all common API calls such as the Setup call.
- Explicit discipline service. This service implements API calls that are unique to explicit disciplines.
- Implicit discipline service. This service implements API calls that are unique to implicit disciplines.

It should be noted that the base service is required to implement both explicit and implicit disciplines, as the common API calls are needed setup the discipline.

This release also contains several changes to the messages used by the service.

## Versions 0.3.0

This version changes function names and will therefore certainly break backwards
compatibility.

### Features

- None

### Bug Fixes

- renamed the Compute RPC function to Functions to deconflict the C++ bindings.
- renamed the ComputePartials RPC function to Gradient to deconflict the C++
  bindings.


## Versions 0.2.0
This release introduces a number of bug fixes and features needed to implement
clients and servers. While 0.1 was released, this is actually the first
functional version of Philote.


### Feature Changes

- reorganized data representations
- added functions for defining partials on the remote server

### Bug Fixes

- fixed protobuf files that weren't compiling



## Versions 0.1.0

Initial draft version of Philote.
