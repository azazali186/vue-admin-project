export default {
    home: {
      label: "dashboard",
      icon: "mdi-shape-outline",
      to: { name: "/" },
      permissions: [],
      children: [],
    },
    users: {
      label: "User Managerment",
      icon: "mdi-account-group",
      permissions: [
        "view-api-admin-users-stats",
        "create-api-admin-users-stats",
        "edit-update-api-admin-users",
        "delete-api-admin-users",
      ],
      children: [
        {
          label: "User List",
          icon: "mdi-account-group",
          to: { name: "users" },
          permissions: [
            "view-api-admin-users-stats",
            "create-api-admin-users-stats",
            "edit-update-api-admin-users",
            "delete-api-admin-users",
          ],
        },
      ],
    },
  };