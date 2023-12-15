const application = {
  invalid_type: 'Only machine to machine applications can have associated roles.',
  role_exists: 'The role id {{roleId}} is already been added to this application.',
  invalid_role_type: 'Can not assign user type role to machine to machine application.',
  invalid_third_party_application_type:
    'Only traditional web applications can be marked as a third-party app.',
  user_consent_scopes_only_for_third_party_applications:
    'Only third-party applications can manage user consent scopes.',
  user_consent_scopes_not_found: 'Invalid user consent scopes.',
};

export default Object.freeze(application);
