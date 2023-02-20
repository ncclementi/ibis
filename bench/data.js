window.BENCHMARK_DATA = {
  "lastUpdate": 1676900187586,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b368b046a946f5d2e0bcd0d48ce501da98738d30",
          "message": "fix(deps): bump snowflake-connector-python upper bound",
          "timestamp": "2023-02-20T08:29:49-05:00",
          "tree_id": "b289a19960b5f64d0fa212a492ea976391522405",
          "url": "https://github.com/ibis-project/ibis/commit/b368b046a946f5d2e0bcd0d48ce501da98738d30"
        },
        "date": 1676900104299,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 110.07512291338442,
            "unit": "iter/sec",
            "range": "stddev: 0.004730982891540764",
            "extra": "mean: 9.084704822786135 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.309215699988826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547124662010654",
            "extra": "mean: 30.02172158620761 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5742132783746053,
            "unit": "iter/sec",
            "range": "stddev: 0.007536788838775752",
            "extra": "mean: 1.7415131932000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5053.28691042965,
            "unit": "iter/sec",
            "range": "stddev: 0.000040767759406926656",
            "extra": "mean: 197.89100000161605 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10695.199116812246,
            "unit": "iter/sec",
            "range": "stddev: 0.000004783860187918655",
            "extra": "mean: 93.49989552116489 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.675250650209,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659959453129154",
            "extra": "mean: 7.058395841267741 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.42820218844048,
            "unit": "iter/sec",
            "range": "stddev: 0.00023831766713596733",
            "extra": "mean: 10.819208600003094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.68792384851322,
            "unit": "iter/sec",
            "range": "stddev: 0.011907237923487031",
            "extra": "mean: 12.393428313726854 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.38540516291586,
            "unit": "iter/sec",
            "range": "stddev: 0.0006527924968581471",
            "extra": "mean: 11.443558545453476 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12505078.39362031,
            "unit": "iter/sec",
            "range": "stddev: 3.4440647413453247e-9",
            "extra": "mean: 79.9675114798803 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.9960373124915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004359621028625873",
            "extra": "mean: 16.130063199999256 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.2348453137499,
            "unit": "iter/sec",
            "range": "stddev: 0.00021252334607342453",
            "extra": "mean: 4.094419855264208 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5129712.965944464,
            "unit": "iter/sec",
            "range": "stddev: 1.1830229885381331e-8",
            "extra": "mean: 194.9426813237321 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 414.88359709244617,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716268419395627",
            "extra": "mean: 2.4103146207951327 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5914.712834597328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991834587885842",
            "extra": "mean: 169.06991564334834 usec\nrounds: 652"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.09453351069487,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620015875004629",
            "extra": "mean: 6.36559387301609 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.564275595541075,
            "unit": "iter/sec",
            "range": "stddev: 0.0013738729964222157",
            "extra": "mean: 639.273541600005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 516.7133266269819,
            "unit": "iter/sec",
            "range": "stddev: 0.00004163359133038177",
            "extra": "mean: 1.9353090939764077 msec\nrounds: 415"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 223.43133595777138,
            "unit": "iter/sec",
            "range": "stddev: 0.007730461972660899",
            "extra": "mean: 4.475647946664923 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.00004080166995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006602017435916276",
            "extra": "mean: 10.75268345454364 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4325656.587314733,
            "unit": "iter/sec",
            "range": "stddev: 1.243507983114414e-8",
            "extra": "mean: 231.17877709802315 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.27595744351898,
            "unit": "iter/sec",
            "range": "stddev: 0.000596659877799275",
            "extra": "mean: 18.770192934780376 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.68220722020607,
            "unit": "iter/sec",
            "range": "stddev: 0.00017886072395421174",
            "extra": "mean: 5.999440592233619 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5843.890766846561,
            "unit": "iter/sec",
            "range": "stddev: 0.000049239237403054166",
            "extra": "mean: 171.1188726649682 usec\nrounds: 2356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.93904108778182,
            "unit": "iter/sec",
            "range": "stddev: 0.00021770633162263936",
            "extra": "mean: 4.220494838710508 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5577.80450702319,
            "unit": "iter/sec",
            "range": "stddev: 0.00007854147083479329",
            "extra": "mean: 179.28200938933384 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5110.880263383893,
            "unit": "iter/sec",
            "range": "stddev: 0.00004994396187338027",
            "extra": "mean: 195.6610111108148 usec\nrounds: 1530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4055159.503514334,
            "unit": "iter/sec",
            "range": "stddev: 1.3030372056401926e-8",
            "extra": "mean: 246.59942454395144 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.12262368802311,
            "unit": "iter/sec",
            "range": "stddev: 0.00042273801086276195",
            "extra": "mean: 9.987752649350739 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 63.11482707060665,
            "unit": "iter/sec",
            "range": "stddev: 0.00041593235919354306",
            "extra": "mean: 15.844137525423282 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18486.463988085416,
            "unit": "iter/sec",
            "range": "stddev: 0.000013537473480755677",
            "extra": "mean: 54.09363308442886 usec\nrounds: 6154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.35512027074398,
            "unit": "iter/sec",
            "range": "stddev: 0.00017077285650810272",
            "extra": "mean: 14.213606574073808 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.07827294041794,
            "unit": "iter/sec",
            "range": "stddev: 0.0012642121598205151",
            "extra": "mean: 76.46269538461272 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.48543567389405,
            "unit": "iter/sec",
            "range": "stddev: 0.00020976160780559133",
            "extra": "mean: 3.9922480814489183 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.7565612065105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419192646604684",
            "extra": "mean: 7.206866409089703 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.89846410497276,
            "unit": "iter/sec",
            "range": "stddev: 0.0007381469430018526",
            "extra": "mean: 12.361174109590182 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.16465743276996,
            "unit": "iter/sec",
            "range": "stddev: 0.0007350903903351687",
            "extra": "mean: 11.090820155842508 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.70535829427163,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567622320866744",
            "extra": "mean: 4.206888760000235 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5809.357890896843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005767897376438493",
            "extra": "mean: 172.1360637062801 usec\nrounds: 2590"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 259.9661544449669,
            "unit": "iter/sec",
            "range": "stddev: 0.000022510784772475407",
            "extra": "mean: 3.8466545852286833 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.682310005098444,
            "unit": "iter/sec",
            "range": "stddev: 0.00070719213436491",
            "extra": "mean: 40.514846454543246 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 989.4518097266541,
            "unit": "iter/sec",
            "range": "stddev: 0.00001095340247923936",
            "extra": "mean: 1.0106606407403105 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 157.36490088151928,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702243272487057",
            "extra": "mean: 6.354657197368963 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1451692.2123471114,
            "unit": "iter/sec",
            "range": "stddev: 1.0564511488532394e-7",
            "extra": "mean: 688.8512533818649 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.78266193214486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004016706840839307",
            "extra": "mean: 12.079824164384544 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 248.0170664039065,
            "unit": "iter/sec",
            "range": "stddev: 0.00011937111593396555",
            "extra": "mean: 4.0319805991554505 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.2068307749198,
            "unit": "iter/sec",
            "range": "stddev: 0.000715563982402192",
            "extra": "mean: 11.466991646342393 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1393934.9801785355,
            "unit": "iter/sec",
            "range": "stddev: 1.1926909690584068e-7",
            "extra": "mean: 717.3935758982961 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1974754.6909689757,
            "unit": "iter/sec",
            "range": "stddev: 3.28291324130107e-8",
            "extra": "mean: 506.39201140936524 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5074.157260962283,
            "unit": "iter/sec",
            "range": "stddev: 0.00009395524961788401",
            "extra": "mean: 197.07706099167217 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 142.8976009253155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007016431760751881",
            "extra": "mean: 6.998018115941943 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9590.453035879256,
            "unit": "iter/sec",
            "range": "stddev: 0.000020985568563440686",
            "extra": "mean: 104.27036097865836 usec\nrounds: 5028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8547715967671253,
            "unit": "iter/sec",
            "range": "stddev: 0.006376591645157042",
            "extra": "mean: 1.1699031691999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.211579830755287,
            "unit": "iter/sec",
            "range": "stddev: 0.0029466371020208304",
            "extra": "mean: 452.16545480001287 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.52746281542343,
            "unit": "iter/sec",
            "range": "stddev: 0.000231498609454415",
            "extra": "mean: 4.056343210527851 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.04914596600565,
            "unit": "iter/sec",
            "range": "stddev: 0.00018916159695897533",
            "extra": "mean: 10.863761847060553 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4399.980057612145,
            "unit": "iter/sec",
            "range": "stddev: 0.000021200055595609486",
            "extra": "mean: 227.27375735941328 usec\nrounds: 1393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117858.25718082268,
            "unit": "iter/sec",
            "range": "stddev: 4.1902336530124084e-7",
            "extra": "mean: 8.484768262488062 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10186.056634491293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018716501195886106",
            "extra": "mean: 98.17341841727759 usec\nrounds: 4094"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 138.4133654310044,
            "unit": "iter/sec",
            "range": "stddev: 0.012216869497191729",
            "extra": "mean: 7.224735825807769 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14976522328991074,
            "unit": "iter/sec",
            "range": "stddev: 0.07500212658124841",
            "extra": "mean: 6.677117544600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7367366714519968,
            "unit": "iter/sec",
            "range": "stddev: 0.003052633745617066",
            "extra": "mean: 1.357337076799979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.33995373768954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007543662129312496",
            "extra": "mean: 6.83340382758678 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1459.7325039857094,
            "unit": "iter/sec",
            "range": "stddev: 0.000006781151236713186",
            "extra": "mean: 685.057020563399 usec\nrounds: 924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 327579.22493397235,
            "unit": "iter/sec",
            "range": "stddev: 3.353566914140906e-7",
            "extra": "mean: 3.052696642168203 usec\nrounds: 1668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.618911646163117,
            "unit": "iter/sec",
            "range": "stddev: 0.0009415808875385201",
            "extra": "mean: 216.5012185999899 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 330.8273238835212,
            "unit": "iter/sec",
            "range": "stddev: 0.000033593204070354834",
            "extra": "mean: 3.022724931729289 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1600561.271105931,
            "unit": "iter/sec",
            "range": "stddev: 1.1382841790401487e-7",
            "extra": "mean: 624.7808303577378 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 139.5572428384963,
            "unit": "iter/sec",
            "range": "stddev: 0.00010313258589516503",
            "extra": "mean: 7.165518461533793 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.63004320320495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980963045777844",
            "extra": "mean: 11.411611399997877 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 157.5735648408187,
            "unit": "iter/sec",
            "range": "stddev: 0.0007173073170408639",
            "extra": "mean: 6.3462421568630685 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 262.64172013460075,
            "unit": "iter/sec",
            "range": "stddev: 0.00015736740853124366",
            "extra": "mean: 3.8074682098773645 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.83285895115004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537222532011782",
            "extra": "mean: 24.49008043243652 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.55107417317674,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224748889451146",
            "extra": "mean: 28.12854529032767 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.4288760775442,
            "unit": "iter/sec",
            "range": "stddev: 0.000687466711964488",
            "extra": "mean: 6.233291814103618 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 629.2412723055472,
            "unit": "iter/sec",
            "range": "stddev: 0.000013437091300329126",
            "extra": "mean: 1.5892155267183736 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.09020227984092,
            "unit": "iter/sec",
            "range": "stddev: 0.00040693841069985967",
            "extra": "mean: 4.523040775611884 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.885245359104877,
            "unit": "iter/sec",
            "range": "stddev: 0.004153737667519209",
            "extra": "mean: 112.5461323333386 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57346.385954228535,
            "unit": "iter/sec",
            "range": "stddev: 5.852154592197174e-7",
            "extra": "mean: 17.437890520217923 usec\nrounds: 12331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8458707580927304,
            "unit": "iter/sec",
            "range": "stddev: 0.005515234867187908",
            "extra": "mean: 1.1822137015999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 559911.1970629287,
            "unit": "iter/sec",
            "range": "stddev: 2.0340111846609877e-7",
            "extra": "mean: 1.7859975032569488 usec\nrounds: 22027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.62636042556152,
            "unit": "iter/sec",
            "range": "stddev: 0.00034459263121719983",
            "extra": "mean: 24.023238874997332 msec\nrounds: 40"
          }
        ]
      }
    ]
  }
}