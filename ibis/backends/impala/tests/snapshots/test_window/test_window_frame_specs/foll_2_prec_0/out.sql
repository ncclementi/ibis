SELECT sum(t0.`d`) OVER (ORDER BY t0.`f` ASC ROWS BETWEEN CURRENT ROW AND 2 FOLLOWING) AS `foo`
FROM `alltypes` t0