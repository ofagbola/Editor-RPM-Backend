## Editor-RPM-Backend-Teleconferencing
## Setup local development (Ensure all dependencies are installed as instructed below)

1. Run Network
> make network
2. Run Postgres
> make postgres
3. Run CreateDB
> make createdb
4. Run Server 
> make server

### Install tools
- [Docker desktop](https://www.docker.com/products/docker-desktop)
- [Golang](https://golang.org/)
- [Migrate](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)



<!-- 
### Branching Strategy:
1. **Master Branch:**
   - The `master` branch is considered the stable and production-ready branch.
   - Direct commits to `master` are restricted; changes should be merged through pull requests (PRs).
  
2. **Dev Branch:**
   - The `dev` branch is considered the single source of truth during development at any stage.
   - Direct commits to `dev` are also restricted; changes should be merged through pull requests (PRs).

3. **Feature Branches:**
   - Each team will work on a feature branch specific to their assigned task or user story.
   - Feature branches should be named descriptively (e.g., `feature/login-page`).

### Guidelines and Rules:

#### 1. Pull Requests (PRs):
   - Each feature or bug fix should have its own PR.
   - PR titles should be clear and concise, summarizing the changes.
   - PR descriptions must include relevant information, such as the purpose of the change, testing steps, and potential impact.

#### 2. Code Reviews:
   - At least two team members must review each PR before merging.
   - Reviewers should focus on code quality, readability, and adherence to coding standards.
   - Use GitHub's review features (comments, suggestions) for feedback.

#### 3. Continuous Integration (CI):
   - CI/CD pipelines must be set up to run automated tests on each PR.
   - PRs cannot be merged until CI passes successfully.

#### 4. Code Standards:
   - Adhere to a consistent coding style and guidelines (e.g., ESLint for JavaScript).
   - Document code as necessary to ensure clarity and maintainability.

#### 5. Commit Messages:
   - Use descriptive and concise commit messages.
   - Follow a consistent format, such as `<type>: <description>`, where type can be `feat`, `fix`, `chore`, etc.

#### 6. Collaboration:
   - Teams should communicate regularly, especially if their work may impact others.
   - Use team channels or meetings to discuss architectural decisions or major changes.

#### 7. Branch Protection:
   - Enable branch protection rules to enforce code review and status checks before merging to important branches.

#### 8. Versioning:
   - If applicable, follow a versioning system and update the version number in the codebase accordingly.

#### 9. Rollback Plan:
   - Teams should have a documented rollback plan in case issues are discovered after merging to the `master` branch.

#### 10. Testing:
   - Each team is responsible for testing their changes thoroughly before creating a PR.
   - Automated tests should cover both new and existing functionality.

#### 11. Release Planning:
   - Coordinate release cycles and plan releases with features and bug fixes from multiple teams.

#### 12. Documentation:
   - Keep documentation up-to-date, including README files and inline comments.
   - Document any configuration changes or setup instructions.

### Conclusion:
Adhering to these guidelines will help ensure a smooth collaboration process among the four teams, maintain code quality, and facilitate the integration of features into the main codebase. Regular communication and adherence to these rules will contribute to a successful and efficient development process. -->
