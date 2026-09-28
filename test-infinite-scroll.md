# Mobile Infinite Scroll Stability Test Guide

This document provides a step-by-step guide to test the mobile infinite-scroll stability fix.

## Prerequisites
- Backend server running
- Frontend dev server running (`npm run dev`)
- At least 60+ images in the gallery (across multiple pages)
- Mobile viewport or browser dev tools in mobile mode

## Test Cases

### 1. Initial Page Load Order
**Steps:**
1. Open gallery on mobile viewport (width ≤ 768px)
2. Observe the initial 30 images
3. Note the order of images (especially pinned images)

**Expected Result:**
- Images load in the expected order (pinned first, then others)
- Order matches the server's response with `reorderGalleryImages()` applied
- No duplicates in the initial load

### 2. Page 2 Append - No Reshuffling
**Steps:**
1. Load initial page (30 images)
2. Scroll down slowly to the bottom
3. Wait for page 2 to load automatically
4. Compare the first 30 images before and after page 2 loads

**Expected Result:**
- First 30 images remain in EXACTLY the same order
- No image jumps to a different position
- No reshuffling occurs
- User's scroll position is preserved
- New images (31-60) appear after the existing 30

### 3. Page 3 Append - Stability Across Multiple Pages
**Steps:**
1. Load page 1, then page 2
2. Continue scrolling to load page 3
3. Verify that images 1-60 remain in their positions
4. Verify images 61-90 appear after them

**Expected Result:**
- All previously loaded images (1-60) remain stable
- No reshuffling of any existing images
- New images append correctly at the end
- User can continue scrolling without interruption

### 4. Duplicate Prevention
**Steps:**
1. If possible, force the API to return duplicate images across pages
2. Or test with a scenario where the same image might appear in two pages
3. Scroll through multiple pages

**Expected Result:**
- No duplicate images appear in the gallery
- The `existingIds` Set correctly filters out duplicates
- Each unique image appears only once

### 5. Scroll Position Preservation
**Steps:**
1. Load page 1
2. Scroll to image 25
3. Wait for page 2 to load
4. Verify you're still viewing image 25 (or near it)

**Expected Result:**
- Scroll position is NOT manually reset
- Browser naturally retains scroll position
- User doesn't jump back to top
- User doesn't jump to bottom

### 6. Loading State While Appending
**Steps:**
1. Scroll to trigger page 2 load
2. Observe the gallery during loading
3. Check that existing images remain visible

**Expected Result:**
- Existing images stay visible
- Loading indicator appears at bottom
- Gallery is not cleared
- No blank screen or flashing

### 7. isFetchingMore Protection
**Steps:**
1. Scroll to trigger page 2 load
2. While loading, try to scroll rapidly to trigger another load
3. Observe behavior

**Expected Result:**
- Only one request at a time
- `isFetchingMore` prevents duplicate requests
- No network spam
- Loading completes before next request can start

### 8. Latest Sorting Stability
**Steps:**
1. Set sort to "Latest"
2. Load page 1
3. Scroll to load page 2
4. Verify chronological order across pages

**Expected Result:**
- Page 1: newest images (1-30)
- Page 2: next newest (31-60)
- Combined: 1-60 in descending date order
- No reshuffling breaks the sort order

### 9. Oldest Sorting Stability
**Steps:**
1. Set sort to "Oldest"
2. Load page 1
3. Scroll to load page 2
4. Verify chronological order across pages

**Expected Result:**
- Page 1: oldest images (1-30)
- Page 2: next oldest (31-60)
- Combined: 1-60 in ascending date order
- No reshuffling breaks the sort order

### 10. Makeup Filter Stability
**Steps:**
1. Set filter to "Makeup"
2. Load page 1
3. Scroll to load page 2
4. Verify all images are makeup type
5. Verify order stability

**Expected Result:**
- Only makeup images shown
- Order remains stable across pages
- No non-makeup images appear
- Filtering works with infinite scroll

### 11. Hairstyle Filter Stability
**Steps:**
1. Set filter to "Hairstyle"
2. Load page 1
3. Scroll to load page 2
4. Verify all images are hairstyle type
5. Verify order stability

**Expected Result:**
- Only hairstyle images shown
- Order remains stable across pages
- No non-hairstyle images appear
- Filtering works with infinite scroll

### 12. Liked Filter Stability
**Steps:**
1. Log in and favorite multiple images across different pages
2. Set filter to "Liked"
3. Scroll through liked images
4. Verify liked images remain stable

**Expected Result:**
- Only liked images shown
- Order remains stable
- No reshuffling of liked images
- Works with the favorite feature

### 13. Pinned Images Behavior
**Steps:**
1. Load initial page with pinned images
2. Note pinned image positions
3. Scroll to load more pages
4. Verify pinned images from page 1 don't move

**Expected Result:**
- Pinned images from page 1 stay in their positions
- Only initial load applies `reorderGalleryImages()`
- Subsequent pages don't reshuffle existing pinned images
- New pinned images from page 2+ appear at their natural positions

### 14. Desktop Load More Unchanged
**Steps:**
1. Switch to desktop viewport (width > 768px)
2. Load page 1
3. Click "Load More" button
4. Verify behavior

**Expected Result:**
- Desktop "Load More" still works
- Order stability applies to desktop too
- No regression in desktop pagination

### 15. IntersectionObserver Continues Working
**Steps:**
1. On mobile, scroll to load page 2
2. Continue scrolling to load page 3
3. Continue to load page 4 if available
4. Verify automatic loading continues

**Expected Result:**
- IntersectionObserver detects bottom proximity
- Automatically triggers page loads
- Continues working after each page load
- No manual intervention needed

### 16. Image Preview Still Works
**Steps:**
1. Load multiple pages
2. Click on an image from page 1
3. Navigate with next/previous
4. Close preview
5. Click on an image from page 2

**Expected Result:**
- Image preview opens correctly
- Next/previous navigation works
- Swipe navigation works
- Close works with Escape key or X button
- Works for images from any page

### 17. Filter Change Resets Gallery
**Steps:**
1. Load page 1 and page 2 with "All" filter
2. Change filter to "Makeup"
3. Verify gallery resets

**Expected Result:**
- Gallery clears and reloads
- New filtered images load
- `append` is false, so `reorderGalleryImages()` applies
- Normal filter change behavior preserved

### 18. Sort Change Resets Gallery
**Steps:**
1. Load page 1 and page 2 with "Latest" sort
2. Change sort to "Oldest"
3. Verify gallery resets

**Expected Result:**
- Gallery clears and reloads
- New sorted images load
- `append` is false, so `reorderGalleryImages()` applies
- Normal sort change behavior preserved

### 19. Memory/Performance
**Steps:**
1. Load 5+ pages (150+ images)
2. Scroll up and down through all images
3. Observe performance

**Expected Result:**
- No significant performance degradation
- No memory leaks
- Smooth scrolling
- No freezing or lagging

### 20. Edge Case - Empty Response
**Steps:**
1. If possible, simulate an empty page response
2. Scroll to trigger the empty page load
3. Observe behavior

**Expected Result:**
- No crash
- No infinite loading
- Graceful handling of empty data
- No UI glitches

## Test Results

Pass/Fail for each test:
- [ ] 1. Initial Page Load Order
- [ ] 2. Page 2 Append - No Reshuffling
- [ ] 3. Page 3 Append - Stability Across Multiple Pages
- [ ] 4. Duplicate Prevention
- [ ] 5. Scroll Position Preservation
- [ ] 6. Loading State While Appending
- [ ] 7. isFetchingMore Protection
- [ ] 8. Latest Sorting Stability
- [ ] 9. Oldest Sorting Stability
- [ ] 10. Makeup Filter Stability
- [ ] 11. Hairstyle Filter Stability
- [ ] 12. Liked Filter Stability
- [ ] 13. Pinned Images Behavior
- [ ] 14. Desktop Load More Unchanged
- [ ] 15. IntersectionObserver Continues Working
- [ ] 16. Image Preview Still Works
- [ ] 17. Filter Change Resets Gallery
- [ ] 18. Sort Change Resets Gallery
- [ ] 19. Memory/Performance
- [ ] 20. Edge Case - Empty Response

## Acceptance Test

**Main Acceptance Test:**
1. Open gallery on mobile
2. Scroll slowly through images
3. Reach bottom
4. Next batch loads
5. Look at the images already passed
6. They must remain in exactly the same order
7. Continue scrolling
8. Only newly loaded images should appear below

**Result:** [PASS/FAIL]

## Notes
- The fix uses `existingIds` Set to prevent duplicates
- `reorderGalleryImages()` is only called on initial load (`append === false`)
- Subsequent pages simply append new images without reshuffling
- This preserves scroll position and user experience
