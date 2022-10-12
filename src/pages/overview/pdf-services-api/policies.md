---
title: Policies | PDF Services API | Adobe PDF Services
---
# Version - Support policy

This document describes the PDF Services SDK's and Public API's
versioning and support policies.

## SDK

### Versioning scheme

The SDK has a version format of \#.\#.\# (e.g. 1.1.0) where the numbers
correspond to a major release, minor release, and patch/update
(Major.Minor.Patch). Releases are defined as follows:

-   **Major Releases (1.x.x)**: Major releases introduce
    backward-incompatible changes to the APIs and interfaces and start
    the EOL clock for all previous releases. Developers should plan on
    migrating their code prior to the end of life of the previous major
    release.
-   **Minor Releases (x.1.x)**: Minor releases typically appear
    quarterly. Changes are backward compatible to the last major
    release. Minor releases introduce new interfaces. Existing
    interfaces continue to function but some interfaces may be
    deprecated; deprecated interfaces will be removed in a next major
    release.
-   **Patch Releases (x.x.1)**: Patch releases only deliver critical
    security or bug fixes as needed. Patch release changes are rolled
    into the next minor release so that developers can update and deploy
    new code based on their business requirements.

### Support

Adobe always recommends that you use the latest product version
(Major.Minor.Patch) since it is always the most functional and most
secure. To support existing applications that may take time to migrate,
The SDK team adheres to a support policy that ensures deployed versions
continue to function securely as follows:

-   Every Major/Minor Version is supported for one year after the
    release of a newer Major/Minor Version; that is a Major.Minor.X
    version reaches its end of life 1 year after the next Major/Minor
    Release. For example, If there are 1.2.0 (Minor), 1.3.0 (Minor) and
    2.0.0 (Major) releases in sequence then,
    -   1.2.0 becomes unsupported 1 year after the release of 1.3.0.
    -   1.3.0 becomes unsupported 1 year after the release of 2.0.0.
-   Security patches and critical bug fixes are generally provided for
    the last dot release of the supported major versions. For example,
    if supported versions are 1.2.1, 1.3.1 and 2.0.0, only the 1.3.1 and
    2.0.0 release would receive a security update. As a best practice,
    deployment on a supported major release should migrate to the last
    minor update for that release.

<InlineAlert slots="text"/>

Once a version reaches its end of life, functionality may be deprecated and stop working.

![Every Major/Minor Version is supported for one year after the
release of a newer Major/Minor Version; that is a Major.Minor.X
version reaches its end of life 1 year after the next Major/Minor
Release](../images/support1.png)

## Public API

### Versioning

As mentioned on [Public API
Docs](../../apis),
each operation has a unique assetId which is passed in Form Parameters.
Generally, APIs will be enhanced while keeping them backward compatible.
If its functionality can't be enhanced without breaking changes, then
its new version will be released with its own unique assetId. The
supported older API versions info will be present on [Public API
Docs](../../apis)

Additionally, the output for the PDF Extract API is generated by a
machine learning pipeline that is frequently trained to improve
inference of document layout and structure.As a result, while changes to
the output structure are not expected between versions, specific results
may vary as the model output improves.

### Support

With the evolution of our APIs, a new version of the API may contain
non-backward compatible changes and we recommend adoption of a new
version upon its release. The previous version of the API will be
supported for one year after the release of a new version. Adobe will
use reasonably commercial efforts to provide 12-months’ notice of
deprecation, unless extenuating circumstances prompt a shorter notice
period. Notices will be updated from time to time here, and it is your
sole responsibility to check for updates from time to time. After the
deprecation notice, no new enhancements are made to the service. Adobe
reserves the right to modify, deprecate, or discontinue the service, in
whole or in part, at any time.

<InlineAlert slots="text" />

Once a version reaches its end of life, functionality may be deprecated and stop working.

## Deprecated docs - past versions

Only the latest documentation is typically available online. Refer to
the [Documentation Library](./releasenotes.md#documentation-library) for links.

<InlineAlert slots="text" />

Legacy docs for all past releases are not maintained. Some links may be broken and content may be outdated.