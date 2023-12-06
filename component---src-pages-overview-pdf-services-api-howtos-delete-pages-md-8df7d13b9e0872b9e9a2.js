"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2576],{34134:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var a=t(87462),o=t(45987),r=(t(15007),t(64983)),i=t(91515);const s=["components"],l={},c=(g="CodeBlock",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var g;const p={_frontmatter:l},d=i.Z;function u(e){let{components:n}=e,t=(0,o.Z)(e,s);return(0,r.mdx)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"delete-pages"},"Delete Pages"),(0,r.mdx)("p",null,"Delete one or more pages from a document"),(0,r.mdx)("h2",{id:"rest-api"},"Rest API"),(0,r.mdx)("p",null,"See our public API Reference for ",(0,r.mdx)("a",{parentName:"p",href:"../../../apis/#tag/Page-Manipulation"},"Delete Pages")),(0,r.mdx)("h2",{id:"delete-pages-in-a-pdf"},"Delete Pages in a PDF"),(0,r.mdx)("p",null,"The delete pages operation selectively removes pages from a PDF file."),(0,r.mdx)("p",null,"Please refer the ",(0,r.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,r.mdx)(c,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.deletepages.DeletePDFPages\n \n     \n   public class DeletePDFPages {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(DeletePDFPages.class);\n\n   public static void main(String[] args) {\n       try {\n           // Initial setup, create credentials instance.\n           Credentials credentials = Credentials.servicePrincipalCredentialsBuilder()\n                .withClientId("PDF_SERVICES_CLIENT_ID")\n                .withClientSecret("PDF_SERVICES_CLIENT_SECRET")\n                .build();\n\n           // Create an ExecutionContext using credentials and create a new operation instance.\n           ExecutionContext executionContext = ExecutionContext.create(credentials);\n           DeletePagesOperation deletePagesOperation = DeletePagesOperation.createNew();\n\n           // Set operation input from a source file.\n           FileRef source = FileRef.createFromLocalFile("src/main/resources/deletePagesInput.pdf");\n           deletePagesOperation.setInput(source);\n\n           // Delete pages of the document (as specified by PageRanges).\n           PageRanges pageRangeForDeletion = getPageRangeForDeletion();\n           deletePagesOperation.setPageRanges(pageRangeForDeletion);\n\n           // Execute the operation.\n           FileRef result = deletePagesOperation.execute(executionContext);\n\n           // Save the result to the specified location.\n           result.saveAs("output/deletePagesOutput.pdf");\n\n       } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n           LOGGER.error("Exception encountered while executing operation", e);\n       }\n   }\n\n   private static PageRanges getPageRangeForDeletion() {\n       // Specify pages for deletion.\n       PageRanges pageRangeForDeletion = new PageRanges();\n       // Add page 1.\n       pageRangeForDeletion.addSinglePage(1);\n\n       // Add pages 3 to 4.\n       pageRangeForDeletion.addRange(3, 4);\n       return pageRangeForDeletion;\n   }\n }\n')),(0,r.mdx)("h4",{id:"net"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd DeletePDFPages/\n// dotnet run DeletePDFPages.csproj\n\n    namespace DeletePDFPages\n    {\n      class Program\n      {\n          private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n          static void Main()\n          {\n              // Configure the logging\n              ConfigureLogging();\n              try\n              {\n                  // Initial setup, create credentials instance.\n                  Credentials credentials = Credentials.ServicePrincipalCredentialsBuilder()\n                        .WithClientId("PDF_SERVICES_CLIENT_ID")\n                        .WithClientSecret("PDF_SERVICES_CLIENT_SECRET")\n                        .Build();\n   \n                  // Create an ExecutionContext using credentials.\n                  ExecutionContext executionContext = ExecutionContext.Create(credentials);\n   \n                  // Create a new operation instance\n                  DeletePagesOperation deletePagesOperation = DeletePagesOperation.CreateNew();\n   \n                  // Set operation input from a source file.\n                  FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"deletePagesInput.pdf");\n                  deletePagesOperation.SetInput(sourceFileRef);\n   \n                  // Delete pages of the document (as specified by PageRanges).\n                  PageRanges pageRangeForDeletion = GetPageRangeForDeletion();\n                  deletePagesOperation.SetPageRanges(pageRangeForDeletion);\n   \n                  // Execute the operation.\n                  FileRef result = deletePagesOperation.Execute(executionContext);\n   \n                  // Save the result to the specified location.\n                  result.SaveAs(Directory.GetCurrentDirectory() + "/output/deletePagesOutput.pdf");\n              }\n              catch (ServiceUsageException ex)\n              {\n                  log.Error("Exception encountered while executing operation", ex);\n              }\n              // Catch more errors here . . .\n          }\n   \n          private static PageRanges GetPageRangeForDeletion()\n          {\n              // Specify pages for deletion.\n              PageRanges pageRangeForDeletion = new PageRanges();\n              // Add page 1.\n              pageRangeForDeletion.AddSinglePage(1);\n   \n              // Add pages 3 to 4.\n              pageRangeForDeletion.AddRange(3, 4);\n              return pageRangeForDeletion;\n          }\n   \n          static void ConfigureLogging()\n          {\n              ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n              XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n          }\n      }\n    }\n')),(0,r.mdx)("h4",{id:"node-js"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/replacepages/replace-pdf-pages.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n const getPageRangesForDeletion = () => {\n   // Specify pages for deletion.\n   const pageRangesForDeletion = new PDFServicesSdk.PageRanges();\n   // Add page 1.\n   pageRangesForDeletion.addSinglePage(1);\n\n   // Add pages 3 to 4.\n   pageRangesForDeletion.addPageRange(3, 4);\n   return pageRangesForDeletion;\n };\n\n try {\n   // Initial setup, create credentials instance.\n     const credentials =  PDFServicesSdk.Credentials\n         .servicePrincipalCredentialsBuilder()\n         .withClientId(\"PDF_SERVICES_CLIENT_ID\")\n         .withClientSecret(\"PDF_SERVICES_CLIENT_SECRET\")\n         .build();\n\n   // Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       deletePagesOperation = PDFServicesSdk.DeletePages.Operation.createNew();\n\n   // Set operation input from a source file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/deletePagesInput.pdf');\n   deletePagesOperation.setInput(input);\n\n   // Delete pages of the document (as specified by PageRanges).\n   const pageRangesForDeletion = getPageRangesForDeletion();\n   deletePagesOperation.setPageRanges(pageRangesForDeletion);\n\n   // Execute the operation and Save the result to the specified location.\n   deletePagesOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/deletePagesOutput.pdf'))\n       .catch(err => {\n           if (err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,r.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Page-Manipulation\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/pagemanipulation\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n    "pageActions": [\n        {\n            "delete": {\n                "pageRanges": [\n                    {\n                        "start": 1,\n                        "end": 2\n                    }\n                ]\n            }\n        }\n    ]\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-services-api-howtos-delete-pages-md-8df7d13b9e0872b9e9a2.js.map