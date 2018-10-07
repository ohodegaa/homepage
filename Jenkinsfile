pipeline {
    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'cd webapp/ && npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'cd webapp/ && npm test'
            }
        }
    }
}