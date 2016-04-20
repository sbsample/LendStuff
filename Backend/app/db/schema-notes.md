account has many pieces of property
a piece of property belongs to an account
a loan belongs to an account as lender_id
a loan belongs to an account as borrower_id
an account has many loans

-accounts
  -id
  -email
  -username
  -password
-property
  -id
  -user_id
  -item_id
  -types
-item
  -id
  -image
-loans
  -property_id
  -lender_id
  -borrower_id
