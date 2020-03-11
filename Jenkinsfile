pipeline {
    agent any
    environment {
        PROJECT_ID = 'trial-demo-dev'
        CLUSTER_NAME = 'nodejs-cluster'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = '{
  "type": "service_account",
  "project_id": "trial-demo-dev",
  "private_key_id": "c5595b0204e1d918cd67ae96848e846b180fb492",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPGC/7jPNutPB0\nf8LFWTT34xMWa4m3gt+PL97UfkFUBcLPd6zjPNX10vhbiHl5WhUyiY9XUUpcOp7W\n238bue9QJOO4lpcrp5Kiqk8/fr6+0Zm+2LdtKxq6ehdcdNowP1MISgKUUs08BNG7\nWGg9Vaqrzb7LTDdSsMQ8SZUXXiJlVWZjIJejFtRm6xw+MNlc5DOJagQG1qn2zqOB\nnJ/it0jEQiVDQW6QS5QFJ2DTyX2FA98L0Kc8FPcO8u7d84p5oqQEg9H/Frt4VIc2\nZ/943h5Ic6ehVcJwV318xmyKn2E92xvsiFguQvZ2KQDGCrXpsX577fbMkoo2dlhy\ndbwomtqVAgMBAAECggEAI+IJglkgXujMFyuB+Ibl9iOqzYIxmRH8oYdGYWRE9oWP\nBTqzwqXqXs9AyD9j6OJydNC//P2xWDyyBAGBSzES5byWlofFRsOg1T2UQKi57T9N\nF/PeCHTlCzWXcaYvnheC0Bdezgtw0zr0ijUdzq7WxTD/o6MfnNzTC60mP6fIZu0u\nyMpTCj/GVM05rbIeOv7mJW+2tvDA4K0+UAL807ac6pPuBlX1qxrY+luW6Gkuf+RY\ndgksPnbwJa/22qSDKppYrSzYOdM5Kpu7Ym0+85IpVjX9RgR7JtyRXM96AxfJ9xU7\nN2rnNy/WFd5/wQ+wVUy+vKa9C0jBXXtH4OZt7AuxYQKBgQDzJp9kdJUKBDqWVFOP\nQ7/6PD/WwKEp75krzPi7DtunWEYk0NxspmIgslzH8uF9ynvF+ZlcpAlQXI7UATn7\n/YFAOGhWfZyJmhzBdU2FbgDMrGGoxlJOAn7aX0c+7vu7kAIwnjHpeZSNu8GsP3wt\nDjMTM8ZtmIN09WrSJ6oi7Evy0QKBgQDaCcoIWJzDSEoBCka1H7uU/f4ttdwMjwMU\n6VSTcE3qR7nA45EGWnxYo0W/9XQFypYoUy9n6NQOBmv7sUkIJElxyRMe7Kc/3EgG\n5z7DpzeFHVeiffTxnsjczBIrgoHLvIqsR87zTvMeFHFqeJHFpd7uAaMNB5s8kNNQ\nXM0XKu90hQKBgB6DGj1g49L99NwoeNPhjJW6OciZI6A/kNkOP6g5lRbK3QKBsydv\nOaEgwMPWlrVSU3XkfHpDm2eaNdIk1UHp7e5BJda0rJAX5sPgFHpJ84+7kgW73Vgs\nt/5vNmGPW8eNqrivIVRLDXk7tnIHBW4h+gbO2HeoS9bBdUYp9A+t11oBAoGAGi0q\nsC3TRC6dk9pj+sLAhnan2V0H+goBWLVajgjhkcripiGr+5NJcmrHqPAS6c8Uj+rM\nujDdpIFo3WK/Xdbdame1f/Txb11G2G1Sv7KHm9eV+dAdZBSoELn/RHH6mzcbfutw\nEQ3dajMSGrI27f+n7/MKXDoZjP/mHrPFe46QCPECgYEAid2/2ZCOjg0ULVS0X3Qt\nHArj4aUTC17HPC9rwFw5IiMcBkjLTTPZOE1DTG1c05PEqi/A/IDNOKdipTeVfaff\nWWm0yQNj9vTh3yXHZSt7HwG7gEM4uY0QEEY9yPFrNCWyc0AsP8+hXEf0fY0GNog1\nzrWhZ8dO5xwhHM2HULB0Gxw=\n-----END PRIVATE KEY-----\n",
  "client_email": "dedyjenkins@trial-demo-dev.iam.gserviceaccount.com",
  "client_id": "111879869173971990478",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dedyjenkins%40trial-demo-dev.iam.gserviceaccount.com"
}
'
    }
    stages {
        stage('Deploy to GKE') {
            steps{
                step([
                $class: 'KubernetesEngineBuilder',
                projectId: env.PROJECT_ID,
                clusterName: env.CLUSTER_NAME,
                location: env.LOCATION,
                manifestPattern: 'deployment.yaml',
                credentialsId: env.CREDENTIALS_ID,
                verifyDeployments: true])
            }
        }
    }
}