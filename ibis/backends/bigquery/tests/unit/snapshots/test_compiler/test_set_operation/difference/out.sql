SELECT t0.`a`
FROM (
  SELECT t1.*
  FROM t0 t1
  EXCEPT DISTINCT
  SELECT t1.*
  FROM t1 t1
) t0