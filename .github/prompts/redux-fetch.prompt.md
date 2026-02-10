---
mode: agent
description: "Create a new Redux slice with API fetching logic and integrate it with the existing store."
---

# Add Redux Slice with API Fetch

Create a new Redux slice that fetches data from an API endpoint and manages loading/error states. This assumes the Redux store is already configured.

## Variables (ask the user if not provided)

- **Feature name** — the name of the slice in camelCase (e.g., `users`, `products`, `employees`).
- **Endpoint URL** — the full API endpoint URL (e.g., `https://api.example.com/users`).

## Steps

Perform all of the following in order:

### 1. Create TypeScript interface for the data

Create `src/types/<featureName>.ts` with:

- A TypeScript interface that defines the shape of the data returned from the API.
- Export the interface (e.g., `export interface User { id: number; name: string; email: string; }`).
- If you don't know the exact shape, create a reasonable interface based on common API patterns and the feature name.

### 2. Create the Redux slice

Create `src/store/slices/<featureName>Slice.ts` with:

- Import `createSlice`, `createAsyncThunk`, and `PayloadAction` from `@reduxjs/toolkit`.
- Import the data type from `../../types/<featureName>`.
- Define a state interface with `data`, `loading`, and `error` properties.
- Create an async thunk named `fetch<FeatureName>` that:
  - Fetches data from the provided endpoint URL.
  - Handles errors with try/catch and `rejectWithValue`.
  - Returns the typed data.
- Create the slice with:
  - Initial state: `{ data: [], loading: false, error: null }`.
  - No synchronous reducers (can be added later if needed).
  - `extraReducers` that handle pending/fulfilled/rejected cases for the async thunk.
- Export the async thunk and the reducer as default.

Example structure:
```typescript
export const fetch<FeatureName> = createAsyncThunk(
  '<featureName>/fetch<FeatureName>',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('<endpoint-url>');
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json() as <DataType>[];
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);
```

### 3. Register the slice in the Redux store

- Open `src/store/index.ts`.
- Import the reducer: `import <featureName>Reducer from './slices/<featureName>Slice'`.
- Add it to the `reducer` object in `configureStore`: `<featureName>: <featureName>Reducer`.

### 4. Create selectors (optional but recommended)

In `src/store/slices/<featureName>Slice.ts`, add:

- Selector functions at the bottom of the file.
- Export selectors like:
  - `export const selectAll<FeatureName> = (state: RootState) => state.<featureName>.data;`
  - `export const select<FeatureName>Loading = (state: RootState) => state.<featureName>.loading;`
  - `export const select<FeatureName>Error = (state: RootState) => state.<featureName>.error;`

### 5. Create example usage documentation

Create a comment block at the top of the slice file showing how to use it in a component:

```typescript
/**
 * Usage example:
 * 
 * import { useAppDispatch, useAppSelector } from '../store/hooks';
 * import { fetch<FeatureName>, selectAll<FeatureName>, select<FeatureName>Loading } from '../store/slices/<featureName>Slice';
 * 
 * const dispatch = useAppDispatch();
 * const data = useAppSelector(selectAll<FeatureName>);
 * const loading = useAppSelector(select<FeatureName>Loading);
 * 
 * useEffect(() => {
 *   dispatch(fetch<FeatureName>());
 * }, [dispatch]);
 */
```

### 6. Verify the implementation

- Confirm that TypeScript compiles without errors.
- Verify the slice is properly registered in the store.
- Check that all imports are correct and follow the project structure.

## Notes

- The slice assumes the API returns an array of items. Adjust if the endpoint returns a single object.
- Error handling is basic. Enhance as needed for your specific requirements.
- Add additional async thunks for POST, PUT, DELETE operations following the same pattern if needed.
