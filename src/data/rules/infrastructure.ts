import { Library } from '../dictionaries';
import { type LibraryRulesMap } from './types';

/**
 * Infrastructure library rules (CI/CD, Containerization, Cloud)
 */
export const infrastructureRules: LibraryRulesMap = {
  // CI/CD libraries
  [Library.GITHUB_ACTIONS]: [
    'Check if `package.json` exists in project root and summarize key scripts',
    'Check if `.nvmrc` exists in project root',
    'Check if `.env.example` exists in project root to identify key `env:` variables',
    'Always use terminal command:`git branch` to verify whether we use `main` or `master` branch',
    'Always use `env:` variables and secrets attached to jobs instead of global workflows',
    'Always use `npm ci` for Node-based dependency setup',
    'Extract common steps into composite actions in separate files',
    'Once you\'re done, as a final step conduct the following: for each public action always use <tool>"Run Terminal"</tool> to see what is the most up-to-date version (use only major version) - extract tag_name from the response:',
    'curl -s https://api.github.com/repos/{owner}/{repo}/releases/latest',
  ],
  [Library.JENKINS]: [
    'Use declarative pipelines with Jenkinsfile instead of freestyle jobs',
    'Implement shared libraries for common pipeline steps',
    'Use agents and labels for distributing builds across {{environment_types}}',
  ],
  [Library.GITLAB_CI]: [
    'Use includes to reuse configuration across multiple pipelines',
    'Implement caching for dependencies to speed up builds',
    'Use rules and only/except to control when jobs run based on {{branch_patterns}}',
  ],

  // Containerization libraries
  [Library.DOCKER]: [
    'Use multi-stage builds to create smaller production images',
    'Implement layer caching strategies to speed up builds for {{dependency_types}}',
    'Use non-root users in containers for better security',
  ],
  [Library.KUBERNETES]: [
    'Use Helm charts for packaging and deploying applications',
    'Implement resource requests and limits for all containers based on {{workload_characteristics}}',
    'Use namespaces to organize and isolate resources',
  ],

  // Cloud libraries
  [Library.AWS]: [
    'Use Infrastructure as Code (IaC) with AWS CDK or CloudFormation',
    'Implement the principle of least privilege for IAM roles and policies',
    'Use managed services when possible instead of maintaining your own infrastructure for {{service_types}}',
  ],
  [Library.AZURE]: [
    'Use Azure Resource Manager (ARM) templates or Bicep for infrastructure as code',
    'Implement Azure AD for authentication and authorization of {{user_types}}',
    'Use managed identities instead of service principals when possible',
  ],
  [Library.GCP]: [
    'Use Terraform or Deployment Manager for infrastructure as code',
    'Implement VPC Service Controls for network security around {{sensitive_services}}',
    'Use workload identity for service-to-service authentication',
  ],
};
