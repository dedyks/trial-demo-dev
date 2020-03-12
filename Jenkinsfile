node {
    
    properties(
    [
        parameters(
            [
            string(defaultValue: 'TRUE', description: '', name: 'BUILD'),
            string(defaultValue: 'trial-demo-dev', description: '', name: 'PROJECT_ID'),
            string(defaultValue: 'nodejs-cluster', description: '', name: 'CLUSTER_NAME'),
            string(defaultValue: 'trial-demo-dev', description: '', name: 'CREDENTIALS_ID'),
            string(defaultValue: 'dedyyyy/trial-demo-dev', description: '', name: 'REGISTRY'),
            string(defaultValue: 'dockerhub', description: '', name: 'DOCKER_CREDENTIAL'),
            string(defaultValue: '3.0.0', description: '', name: 'IMAGE_VERSION')


            
            ]
        )
    ]
    )
        if (BUILD == "TRUE")
        {
        stage('Change deployment version') {
            sh "pwd && ls -la"
            sh "sed 's/VERSION/$IMAGE_VERSION/' Deployment.yaml"

        }   
        stage('Building image') {
            script {
                dockerImage = docker.build registry + env.IMAGE_VERSION
            }
        }
        stage('Deploy Image') {
            script {
                docker.withRegistry( '', env.DOCKER_CREDENTIAL ) {
                    dockerImage.push()
                    }
                }
        }
        stage('Deploy to GKE') {
          [
                $class: 'KubernetesEngineBuilder',
                projectId: env.PROJECT_ID,
                clusterName: env.CLUSTER_NAME,
                location: env.LOCATION,
                manifestPattern: 'Deployment.yaml',
                credentialsId: env.CREDENTIALS_ID,
                verifyDeployments: true]
        }
        }
      
        else{
        stage('Change deployment version') {
            sh "pwd && ls -la"
            sh "sed 's/VERSION/$IMAGE_VERSION/' Deployment.yaml"
        }  
        stage('Deploy to GKE') {
          [
                $class: 'KubernetesEngineBuilder',
                projectId: env.PROJECT_ID,
                clusterName: env.CLUSTER_NAME,
                location: env.LOCATION,
                manifestPattern: 'Deployment.yaml',
                credentialsId: env.CREDENTIALS_ID,
                verifyDeployments: true]
        }
        }
        
        
}