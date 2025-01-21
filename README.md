# Silent Failure in Next.js SSG

This repository demonstrates a subtle bug in Next.js where errors thrown within `getStaticProps` or `getStaticPaths` during the build process are not always reported clearly, leading to a seemingly successful build but a broken page at runtime. The solution involves proper error handling and logging to identify and resolve these issues.

## Bug
The `bug.js` file shows an example of a Next.js page where an error is thrown in `getStaticProps`, yet the build process completes without any obvious indication of failure.  The generated page will be faulty and may lead to unexpected behavior. 

## Solution
The `bugSolution.js` file demonstrates the corrected implementation, employing robust error handling and logging, ensuring that any errors during static generation are caught and reported, preventing silent failures.