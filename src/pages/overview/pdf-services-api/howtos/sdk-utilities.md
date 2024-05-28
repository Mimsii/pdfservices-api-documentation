---
title: SDK Utilities | How Tos | PDF Services API | Adobe PDF Services
---

# SDK Utilities

This page covers various utilities provided by the Adobe PDF Services SDKs, including operations such as refreshing 
download URIs, deleting assets, and streamline your workflows.

## Important Note on Expiry

- Asset Expiry : Assets uploaded to Adobe internal storage have an expiry of 24 hours. After this period, 
the asset will be automatically deleted from Adobe internal storage.

- Pre-signed URI Expiry : The pre-signed URI provided for uploading or downloading the content has an expiry of 1 hour. 
Ensure that you use the URI within this timeframe to avoid expiration and potential access issues.

See our public API Reference for assets [here](../../../apis/#tag/Assets).

## Refresh Download URI

This function ensures that you have a valid download URI for your assets, if the original URI has expired or is null. 
This is essential for scenarios where assets need to be downloaded after a significant time has elapsed, 
during which the original URI might have become invalid.

<CodeBlock slots="heading, code" repeat="3" languages="Java, Node.js, Python" />

### Java

```javascript
CreatePDFResult result = pdfServicesResponse.getResult();
Asset asset = result.getAsset();

// refresh the download URI in case it expires or is null for the uploaded asset
Asset refreshedAsset = pdfServices.refreshDownloadURI(asset);
```

### Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// refresh the download URI in case it expires or is null for the uploaded asset
const refreshedAsset = await pdfServices.refreshDownloadURI({asset});
```

### Python

```python
result = pdf_services_response.getResult()
asset = result.getAsset()

# refresh the download URI in case it expires or is null for the uploaded asset
refreshed_asset = pdf_services.refreshDownloadURI(asset);
```

## Delete Asset

This function deletes an asset from the Adobe internal storage, freeing up space and managing the lifecycle of 
your documents. It's essential to use this function to remove assets that are no longer needed, ensuring efficient 
use of storage resources.

<CodeBlock slots="heading, code" repeat="3" languages="Java, Node.js, Python" />

### Java

```javascript
CreatePDFResult result = pdfServicesResponse.getResult();
Asset asset = result.getAsset();
 
// delete asset
pdfServices.deleteAsset(asset);
```

### Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// delete asset
await pdfServices.deleteAsset({asset});
```

### Python

```python
create_pdf_result = pdf_services_response.getResult()
output_asset = create_pdf_result.getAsset()        

# delete asset
pdf_services.deleteAsset(output_asset);
```