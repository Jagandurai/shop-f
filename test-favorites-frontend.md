# Frontend Favorites Functionality - Manual Test Guide

This document provides a step-by-step guide to manually test the favorites functionality in the frontend.

## Prerequisites
- Backend server running on the configured port
- Frontend dev server running (`npm run dev`)
- At least one image uploaded in the gallery
- Google OAuth configured for the project

## Test Cases

### 1. Heart Icon Display
**Steps:**
1. Navigate to the gallery page
2. Verify that heart icons appear on every gallery image
3. Check that hearts are outline (empty) for unliked images

**Expected Result:**
- Heart icon (♡) appears on each image in the top-right corner
- Heart is outlined with white stroke when not liked
- Heart is positioned above the image without blocking it

### 2. Unauthenticated User - Heart Click
**Steps:**
1. Ensure you are NOT logged in
2. Click on a heart icon on any image
3. Observe the behavior

**Expected Result:**
- Toast message appears: "Please log in to favourite images"
- No favorite is added to the database
- Heart remains in outline state
- Image preview does NOT open (stopPropagation works)

### 3. Login and Favorite Image
**Steps:**
1. Click the Google Login button
2. Complete the Google OAuth flow
3. After successful login, click a heart icon on an image
4. Observe the toast message and heart state

**Expected Result:**
- Login completes successfully
- Toast appears: "Added to favourites"
- Heart changes to filled state (♥) with pink color
- Favorite is persisted in the database
- Image preview does NOT open

### 4. Remove Favorite
**Steps:**
1. While logged in, click the heart icon on a liked image
2. Observe the toast message and heart state

**Expected Result:**
- Toast appears: "Removed from favourites"
- Heart changes back to outline state
- Favorite is removed from the database
- Image preview does NOT open

### 5. Liked Filter - Empty State
**Steps:**
1. Ensure you have no favorites (remove all if needed)
2. Click the "Liked" filter button in the toolbar
3. Observe the gallery display

**Expected Result:**
- If not logged in: Toast appears "Please log in to view your liked images"
- If logged in with no favorites: Message displays "You haven't liked any images yet."
- No images are shown

### 6. Liked Filter - With Favorites
**Steps:**
1. Log in and favorite at least one image
2. Click the "Liked" filter button
3. Observe the gallery display

**Expected Result:**
- Only favorited images are displayed
- All shown images have filled heart icons
- Heart icons on shown images are in liked state

### 7. Filter Persistence
**Steps:**
1. Select "Liked" filter
2. Navigate to another page (e.g., Home, Service)
3. Return to Gallery page
4. Observe the filter state

**Expected Result:**
- Filter resets to "All" (this is expected behavior as state is component-local)

### 8. Other Filters Still Work
**Steps:**
1. Click "All" filter
2. Click "Makeup" filter
3. Click "Hairstyle" filter
4. Verify images change appropriately

**Expected Result:**
- All filters work correctly
- Heart icons remain visible on all images
- Existing gallery functionality is not broken

### 9. Logout Behavior
**Steps:**
1. Log in and favorite some images
2. Click the Logout button (if admin) or clear localStorage
3. Observe the heart states

**Expected Result:**
- All hearts return to outline state
- Favorite state is cleared from React memory
- No user's favorites are shown to another user

### 10. User Switching
**Steps:**
1. Log in as User A and favorite an image
2. Logout
3. Log in as User B
4. Check the heart state on the same image

**Expected Result:**
- User B does NOT see User A's favorites
- Heart is in outline state for User B
- Users are completely isolated

### 11. Rapid Heart Clicks (Race Condition)
**Steps:**
1. Log in
2. Rapidly click the same heart icon multiple times (5-10 clicks quickly)
3. Observe the behavior

**Expected Result:**
- Only one request is processed at a time
- Final state matches the last completed request
- No duplicate favorites are created
- Toast messages reflect the actual final state

### 12. Keyboard Accessibility
**Steps:**
1. Tab to focus on a heart icon
2. Press Enter or Space
3. Observe the behavior

**Expected Result:**
- Heart icon is focusable (visible focus ring)
- Enter/Space toggles the favorite state
- Same behavior as mouse click

### 13. Existing Functionality Unchanged
**Steps:**
1. Click on an image (not the heart)
2. Verify image preview opens
3. Test next/previous navigation
4. Test swipe navigation
5. Test close with Escape key
6. If admin, test upload, delete, pin, type change

**Expected Result:**
- All existing functionality works exactly as before
- Heart buttons do not interfere with image clicks
- Admin features remain protected

### 14. Pagination/Infinite Scroll with Liked Filter
**Steps:**
1. Favorite multiple images across different pages
2. Select "Liked" filter
3. Observe pagination behavior

**Expected Result:**
- All favorited images are shown regardless of original pagination
- No pagination appears for "Liked" filter (all favorites loaded)
- Infinite scroll is disabled for "Liked" filter

### 15. Mobile Responsiveness
**Steps:**
1. Open gallery on mobile viewport or actual mobile device
2. Test heart icon touch targets
3. Test Liked filter on mobile
4. Verify heart icons are easily tappable

**Expected Result:**
- Heart icons are appropriately sized for touch (36px minimum)
- Heart icons are easily tappable without zooming
- Liked filter works on mobile
- Layout remains responsive

## Test Results

Pass/Fail for each test:
- [ ] 1. Heart Icon Display
- [ ] 2. Unauthenticated User - Heart Click
- [ ] 3. Login and Favorite Image
- [ ] 4. Remove Favorite
- [ ] 5. Liked Filter - Empty State
- [ ] 6. Liked Filter - With Favorites
- [ ] 7. Filter Persistence
- [ ] 8. Other Filters Still Work
- [ ] 9. Logout Behavior
- [ ] 10. User Switching
- [ ] 11. Rapid Heart Clicks (Race Condition)
- [ ] 12. Keyboard Accessibility
- [ ] 13. Existing Functionality Unchanged
- [ ] 14. Pagination/Infinite Scroll with Liked Filter
- [ ] 15. Mobile Responsiveness

## Notes
- All toast messages should be brief and clear
- Heart animations should be smooth
- No console errors should appear during testing
- Network requests should complete successfully
