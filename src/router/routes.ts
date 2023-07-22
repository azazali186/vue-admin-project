const routes = [
    {
      name: "Page: Login",
      path: "/auth/login",
      component: () => import("@/pages/auth/Login.vue"),
    },
  
    {
      path: "/",
      meta: { requiresAuth: true, title: "Dashboard", subtitle: "Dashboard" },
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          name: "home",
          path: "/",
          component: () => import("@/pages/Dashboard.vue"),
          meta: { title: "Home", subtitle: "Dashboard" },
        },
  
        // LOG HISTORY
        {
          name: "audit-logs",
          path: "/audit-logs",
          component: () => import("@/pages/LogHistory/AuditLog.vue"),
          meta: { title: "Home", subtitle: "Activity Logs" },
        },
        {
          name: "admin-logins",
          path: "/admin-logins",
          component: () => import("@/pages/LogHistory/AdminLoginLog.vue"),
          meta: { title: "Home", subtitle: "Admin Login" },
        },
        {
          name: "member-logins",
          path: "/member-logins",
          component: () => import("@/pages/LogHistory/MemberLoginLog.vue"),
          meta: { title: "Home", subtitle: "Member Login" },
        },
  
        // ACL
        {
          name: "roles",
          path: "/roles",
          component: () => import("@/pages/Role/Index.vue"),
          meta: { title: "Home", subtitle: "Roles" },
        },
        {
          name: "permissions",
          path: "/permissions",
          component: () => import("@/pages/Permission/Index.vue"),
          meta: { title: "Home", subtitle: "Permissions" },
        },
  
        // MASTER DATA
        {
          name: "languages",
          path: "/languages",
          component: () => import("@/pages/Language/Index.vue"),
          meta: { title: "Home", subtitle: "Languages" },
        },
        {
          name: "whitelist-ips",
          path: "/whitelist-ips",
          component: () => import("@/pages/WhitelistIP/Index.vue"),
          meta: { title: "Home", subtitle: "Whitelist IPs" },
        },
  
        // USER MANAGEMENT
        {
          name: "users",
          path: "/users",
          component: () => import("@/pages/User/Index.vue"),
          meta: { title: "Home", subtitle: "Users" },
        },
  
        // Members MANAGEMENT
        {
          name: "members",
          path: "/members",
          component: () => import("@/pages/Members/Index.vue"),
          meta: { title: "Members", subtitle: "Member List" },
        },
      ],
    },
  
    // Always leave this as last one,
    // but you can also remove it
    {
      path: "/:catchAll(.*)*",
      component: () => import("@/pages/Error404.vue"),
    },
  ];
  
  export default routes;