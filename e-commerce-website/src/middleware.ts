import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Studio Routes ko protect karo
const isProtectedRoute = createRouteMatcher(["/studio(.*)"]);

export default clerkMiddleware(async (authPromise, request) => {
  const auth = await authPromise; // ✅ Yeh fix karega
  const { protect } = auth;

  // Sirf Studio pages ko protect karo
  if (isProtectedRoute(request)) {
    protect();
  }
});

export const config = {
  matcher: [
    "/", 
  ],
};


 