# dread-captcha-solver
Example of microservice to solve captchas from the darknet forum Dread

I used entr as a file watcher and chained three file watchers to pull up the various stages of image transformation, to facilitate development speeds.
First to rerun the server on file change, then to pull up the processed images, then to display the tesseract recognition attempts.
A bash script was used to loop over 10 captchas at once so I could quickly see how close I was getting out of 100% of captchas solved.
