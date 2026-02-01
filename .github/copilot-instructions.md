# AI Agent Instructions for crud-angular-material

## Project Overview
Angular 21 standalone-components CRUD application with Material design, using Vitest for testing and modern ESM module setup. Structured for standalone components with signal-based reactivity and modern Angular patterns.

## Key Architecture Decisions

### Standalone Components
- **All components use standalone API** (`import { Component } from '@angular/core'` with `imports` array)
- No `NgModule` declarations; bootstrap via `bootstrapApplication()` in [src/main.ts](src/main.ts#L1)
- Implications: import dependencies directly into component `imports`, not in a shared module

### Configuration & Routing
- App configuration in [src/app/app.config.ts](src/app/app.config.ts) provides router and error listeners
- Routes defined in [src/app/app.routes.ts](src/app/app.routes.ts) (currently empty—expand here for CRUD routes)
- Root component [src/app/app.ts](src/app/app.ts) uses `<router-outlet>` for page navigation

### Styling
- **SCSS preprocessor** configured in [angular.json](angular.json#L13)
- Global styles in [src/styles.scss](src/styles.scss)
- Component styles use `.scss` files by default (see schematics config)
- Prettier configured with `printWidth: 100` and Angular HTML parser for templates

## Development Workflow

### Common Commands
```bash
npm start          # Start dev server (ng serve) on http://localhost:4200
npm run build      # Production build → dist/
npm run watch      # Watch mode for development
npm test           # Run Vitest unit tests
```

### Adding Features
1. **New components**: `ng generate component components/feature-name`
2. **New services**: `ng generate service services/feature-name`
3. Add route in [src/app/app.routes.ts](src/app/app.routes.ts) pointing to component
4. Import component into route or parent component

### Testing
- Test files use `.spec.ts` suffix alongside implementation (e.g., `app.spec.ts`)
- Test runner: **Vitest** (configured in [angular.json](angular.json#L50+))
- Config: [tsconfig.spec.json](tsconfig.spec.json) extends app config with test environment

## Code Patterns & Conventions

### Signals & Reactivity
- Use `signal()` from `@angular/core` for reactive state (see [src/app/app.ts](src/app/app.ts#L7))
- Access in templates with `{{ title() }}`—signals require function call syntax
- Prefer signals over RxJS observables for simple state

### Component Structure
```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature',
  imports: [RouterOutlet],        // Import dependencies here
  templateUrl: './feature.html',  // Must exist
  styleUrl: './feature.scss'      // Optional but required for styling
})
export class FeatureComponent {
  state = signal('initial');
}
```

### TypeScript Configuration
- **Strict mode enabled** (`"strict": true`) in [tsconfig.json](tsconfig.json#L6)
- `noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch` enforced
- Target: **ES2022** with module preservation
- Template strict mode enabled in Angular compiler options

## Build & Deployment
- Production build optimizes for performance with output hashing
- Budgets enforced: 500kB initial, 4kB per component style
- Assets served from `public/` directory via [angular.json](angular.json#L26)

## Prettier Formatting
- Max line width: 100 characters
- Single quotes for JS
- Angular parser for HTML templates
- Auto-format on save recommended (see `.vscode` settings if configured)

## Next Steps for CRUD Implementation
1. Define data model for CRUD entities
2. Create service layer to handle data operations
3. Build components: list, create, edit, delete forms
4. Wire routes and integrate Material design for UI
