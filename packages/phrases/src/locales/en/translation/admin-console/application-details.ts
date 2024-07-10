const application_details = {
  page_title: 'Application details',
  back_to_applications: 'Back to applications',
  check_guide: 'Check guide',
  settings: 'Settings',
  settings_description:
    'An "Application" is a registered software or service that can access user info or act for a user. Applications help recognize who’s asking for what from Logto and handle the sign-in and permission. Fill in the required fields for authentication.',
  integration: 'Integration',
  integration_description:
    "Deploy with Logto secure workers, powered by Cloudflare's edge network for top-tier performance and 0ms cold starts worldwide.",
  service_configuration: 'Service configuration',
  service_configuration_description: 'Complete the necessary configurations in your service.',
  session: 'Session',
  endpoints_and_credentials: 'Endpoints & Credentials',
  endpoints_and_credentials_description:
    'Use the following endpoints and credentials to set up the OIDC connection in your application.',
  refresh_token_settings: 'Refresh token',
  refresh_token_settings_description: 'Manage the refresh token rules for this application.',
  machine_logs: 'Machine logs',
  application_name: 'Application name',
  application_name_placeholder: 'My App',
  description: 'Description',
  description_placeholder: 'Enter your application description',
  config_endpoint: 'OpenID provider configuration endpoint',
  issuer_endpoint: 'Issuer endpoint',
  authorization_endpoint: 'Authorization endpoint',
  authorization_endpoint_tip:
    "The endpoint to perform authentication and authorization. It's used for OpenID Connect <a>Authentication</a>.",
  show_endpoint_details: 'Show endpoint details',
  hide_endpoint_details: 'Hide endpoint details',
  logto_endpoint: 'Logto endpoint',
  application_id: 'App ID',
  application_id_tip:
    'The unique application identifier normally generated by Logto. It also stands for “<a>client_id</a>” in OpenID Connect.',
  application_secret: 'App Secret',
  redirect_uri: 'Redirect URI',
  redirect_uris: 'Redirect URIs',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'The URI redirects after a user sign-in (whether successful or not). See OpenID Connect <a>AuthRequest</a> for more info.',
  post_sign_out_redirect_uri: 'Post sign-out redirect URI',
  post_sign_out_redirect_uris: 'Post sign-out redirect URIs',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'The URI redirects after a user sign-out (optional). It may have no practical effect in some app types.',
  cors_allowed_origins: 'CORS allowed origins',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'By default, all the origins of Redirect URIs will be allowed. Usually no action is required for this field. See the <a>MDN doc</a> for detailed info.',
  token_endpoint: 'Token endpoint',
  user_info_endpoint: 'Userinfo endpoint',
  enable_admin_access: 'Enable admin access',
  enable_admin_access_label:
    'Enable or disable the access to Management API. Once enabled, you can use access tokens to call Management API on behalf on this application.',
  always_issue_refresh_token: 'Always issue refresh token',
  always_issue_refresh_token_label:
    'When enabled, Logto will always issue refresh tokens, regardless of whether `prompt=consent` is presented in the authentication request. However, this practice is discouraged unless necessary, as it is not compatible with OpenID Connect and may potentially cause issues.',
  refresh_token_ttl: 'Refresh token time to live (TTL) in days',
  refresh_token_ttl_tip:
    'The duration for which a refresh token can be used to request new access tokens before it expires and becomes invalid. Token requests will extend the TTL of the refresh token to this value.',
  rotate_refresh_token: 'Rotate refresh token',
  rotate_refresh_token_label:
    'When enabled, Logto will issue a new refresh token for token requests when 70% of the original time to live (TTL) has passed or certain conditions are met. <a>Learn more</a>',
  backchannel_logout: 'Backchannel Logout',
  backchannel_logout_description:
    'Configure the OpenID Connect backchannel logout endpoint and if session is required for this application.',
  backchannel_logout_uri: 'Backchannel logout URI',
  backchannel_logout_uri_session_required: 'Is session required?',
  backchannel_logout_uri_session_required_description:
    'When enabled, the RP requires that a `sid` (session ID) claim be included in the logout token to identify the RP session with the OP when the `backchannel_logout_uri` is used.',
  delete_description:
    'This action cannot be undone. It will permanently delete the application. Please enter the application name <span>{{name}}</span> to confirm.',
  enter_your_application_name: 'Enter your application name',
  application_deleted: 'Application {{name}} has been successfully deleted',
  redirect_uri_required: 'You must enter at least one redirect URI',
  app_domain_description_1:
    'Feel free to use your domain with {{domain}} powered by Logto, which is permanently valid.',
  app_domain_description_2:
    'Feel free to utilize your domain <domain>{{domain}}</domain> which is permanently valid.',
  custom_rules: 'Custom authentication rules',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Set rules with regular expressions for authentication-required routes. Default: full-site protection if left blank.',
  authentication_routes: 'Authentication routes',
  custom_rules_tip:
    "Here are two case scenarios:<ol><li>To only protect routes '/admin' and '/privacy' with authentication: ^/(admin|privacy)/.*</li><li>To exclude JPG images from authentication: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Redirect your authentication button using the specified routes. Note: These routes are irreplaceable.',
  protect_origin_server: 'Protect your origin server',
  protect_origin_server_description:
    'Ensure to protect your origin server from direct access. Refer to the guide for more <a>detailed instructions</a>.',
  session_duration: 'Session duration (days)',
  try_it: 'Try it',
  no_organization_placeholder: 'No organization found. <a>Go to organizations</a>',
  branding: {
    name: 'Branding',
    description: 'Customize your app logo and branding color for the app-level experience.',
    description_third_party:
      "Customize your application's display name and logo on the consent screen.",
    app_logo: 'App logo',
    app_level_sie: 'App-level sign-in experience',
    app_level_sie_switch:
      'Enable the app-level sign-in experience and set up app-specific branding. If disabled, the omni sign-in experience will be used.',
    more_info: 'More info',
    more_info_description: 'Offer users more details about your application on the consent screen.',
    display_name: 'Display name',
    application_logo: 'Application logo',
    application_logo_dark: 'Application logo (dark)',
    brand_color: 'Brand color',
    brand_color_dark: 'Brand color (dark)',
    terms_of_use_url: 'Application terms of use URL',
    privacy_policy_url: 'Application privacy policy URL',
  },
  permissions: {
    name: 'Permissions',
    description:
      'Select the permissions that the third-party application requires for user authorization to access specific data types.',
    user_permissions: 'Personal user data',
    organization_permissions: 'Organization access',
    table_name: 'Grant permissions',
    field_name: 'Permission',
    field_description: 'Displayed in the consent screen',
    delete_text: 'Remove permission',
    permission_delete_confirm:
      'This action will withdraw the permissions granted to the third-party app, preventing it from requesting user authorization for specific data types. Are you sure you want to continue?',
    permissions_assignment_description:
      'Select the permissions the third-party application requests for user authorization to access specific data types.',
    user_profile: 'User data',
    api_permissions: 'API permissions',
    organization: 'Organization permissions',
    user_permissions_assignment_form_title: 'Add the user profile permissions',
    organization_permissions_assignment_form_title: 'Add the organization permissions',
    api_resource_permissions_assignment_form_title: 'Add the API resource permissions',
    user_data_permission_description_tips:
      'You can modify the description of the personal user data permissions via "Sign-in Experience > Content > Manage Language"',
    permission_description_tips:
      'When Logto is used as an Identity Provider (IdP) for authentication in third-party apps, and users are asked for authorization, this description appears on the consent screen.',
    user_title: 'User',
    user_description:
      'Select the permissions requested by the third-party app for accessing specific user data.',
    grant_user_level_permissions: 'Grant permissions of user data',
    organization_title: 'Organization',
    organization_description:
      'Select the permissions requested by the third-party app for accessing specific organization data.',
    grant_organization_level_permissions: 'Grant permissions of organization data',
  },
  roles: {
    assign_button: 'Assign roles',
    delete_description:
      'This action will remove this role from this machine-to-machine app. The role itself will still exist, but it will no longer be associated with this machine-to-machine app.',
    deleted: '{{name}} was successfully removed from this user.',
    assign_title: 'Assign roles to {{name}}',
    assign_subtitle:
      'Machine-to-machine apps must have machine-to-machine type of roles to access related API resources.',
    assign_role_field: 'Assign roles',
    role_search_placeholder: 'Search by role name',
    added_text: '{{value, number}} added',
    assigned_app_count: '{{value, number}} applications',
    confirm_assign: 'Assign roles',
    role_assigned: 'Successfully assigned role(s)',
    search: 'Search by role name, description or ID',
    empty: 'No role available',
  },
};

export default Object.freeze(application_details);
