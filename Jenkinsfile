

pipeline {
    agent any
    environment {
        PROJECT_ID = 'trial-demo-dev'
        CLUSTER_NAME = 'nodejs-cluster'
        LOCATION = 'us-central1-a'
        CREDENTIALS_ID = 'trial-demo-dev'
        REGISTRY= 'dedyyyy/trial-demo-dev'
        DOCKER_CREDENTIAL = 'dockerhub'
        IMAGE_VERSION =':3.0.0'

        
    }
    properties(
    [
        parameters(
            [string(defaultValue: 'TRUE', description: 'Build image', name: 'BUILD')]
        )
    ]
    )
        if (BUILD == "TRUE")
        {
        stage('Change deployment version') {
            sh "sed '/$VERSION/$IMAGE_VERSION/' Deployment.yaml"
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
            sh "sed '$IMAGE_VERSION' Deployment.yaml"

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
}

