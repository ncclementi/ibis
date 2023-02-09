window.BENCHMARK_DATA = {
  "lastUpdate": 1675966454188,
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
          "id": "ae0f2fb90bd47358b521047f43132d35738c8f05",
          "message": "ci: enable merge groups",
          "timestamp": "2023-02-09T13:07:16-05:00",
          "tree_id": "4a8a1102c63730ea6892b894aeece3617f003ff0",
          "url": "https://github.com/ibis-project/ibis/commit/ae0f2fb90bd47358b521047f43132d35738c8f05"
        },
        "date": 1675966370899,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12276436.762808539,
            "unit": "iter/sec",
            "range": "stddev: 3.610326485239422e-9",
            "extra": "mean: 81.4568607586006 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4442077.229314961,
            "unit": "iter/sec",
            "range": "stddev: 1.2210188449995763e-8",
            "extra": "mean: 225.11990413029537 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 328.6027930329079,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397614855265768",
            "extra": "mean: 3.0431877671224026 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.78738176060082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006528176080365605",
            "extra": "mean: 16.18453430952236 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8732803558410928,
            "unit": "iter/sec",
            "range": "stddev: 0.0033544556567739283",
            "extra": "mean: 1.1451076316000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.5058415251541,
            "unit": "iter/sec",
            "range": "stddev: 0.00033045753148861417",
            "extra": "mean: 8.29835290425537 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6087.615219889862,
            "unit": "iter/sec",
            "range": "stddev: 0.00004972728993318843",
            "extra": "mean: 164.26793808070084 usec\nrounds: 1615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.72498869288663,
            "unit": "iter/sec",
            "range": "stddev: 0.000092022628824967",
            "extra": "mean: 7.05591871428522 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15445444963241747,
            "unit": "iter/sec",
            "range": "stddev: 0.05600222355607389",
            "extra": "mean: 6.474400720599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 335523.3006576003,
            "unit": "iter/sec",
            "range": "stddev: 0.000018815379056195773",
            "extra": "mean: 2.9804189397281076 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.85923521885303,
            "unit": "iter/sec",
            "range": "stddev: 0.0006868140643926032",
            "extra": "mean: 6.255503466102312 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57517.15102976456,
            "unit": "iter/sec",
            "range": "stddev: 5.936234084612914e-7",
            "extra": "mean: 17.386118437655405 usec\nrounds: 11905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.136624341438,
            "unit": "iter/sec",
            "range": "stddev: 0.00015930424667960307",
            "extra": "mean: 14.46411376785482 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.18042982470557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006696397519196537",
            "extra": "mean: 10.73186721590828 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.18780182124188,
            "unit": "iter/sec",
            "range": "stddev: 0.0004182397907412805",
            "extra": "mean: 23.703534121953055 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 256.84338237291314,
            "unit": "iter/sec",
            "range": "stddev: 0.00020309608443911046",
            "extra": "mean: 3.8934232634738137 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.08482943283005,
            "unit": "iter/sec",
            "range": "stddev: 0.000656088751170467",
            "extra": "mean: 6.246688106193034 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6105.749839499325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005286305301496453",
            "extra": "mean: 163.78004770696606 usec\nrounds: 3794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5802.437834483566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008224601661586915",
            "extra": "mean: 172.34135522436029 usec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 618.2291470652349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000355162082351482",
            "extra": "mean: 1.6175232189343558 msec\nrounds: 507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2801952417358757,
            "unit": "iter/sec",
            "range": "stddev: 0.002557100547292426",
            "extra": "mean: 438.5589363999884 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 163.20704765166766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006113067725913015",
            "extra": "mean: 6.127186383116844 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 976.2896924414238,
            "unit": "iter/sec",
            "range": "stddev: 0.000018152219136565968",
            "extra": "mean: 1.0242861393929947 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.80033182184766,
            "unit": "iter/sec",
            "range": "stddev: 0.014043222931340187",
            "extra": "mean: 13.736201126763218 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6217.700708647617,
            "unit": "iter/sec",
            "range": "stddev: 0.00004337588939780241",
            "extra": "mean: 160.83115718471197 usec\nrounds: 2742"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.129535956007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006818227789866048",
            "extra": "mean: 10.973390674158072 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 85.01029673575465,
            "unit": "iter/sec",
            "range": "stddev: 0.01083812513116363",
            "extra": "mean: 11.763280901234731 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.70869659922769,
            "unit": "iter/sec",
            "range": "stddev: 0.0003511692946528784",
            "extra": "mean: 72.94639521428589 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.56886408412694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007646732460404061",
            "extra": "mean: 28.927765678571202 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.216765647870915,
            "unit": "iter/sec",
            "range": "stddev: 0.021184138213090183",
            "extra": "mean: 30.10527908108045 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19304.360175975282,
            "unit": "iter/sec",
            "range": "stddev: 0.000018645348951980144",
            "extra": "mean: 51.8017686618033 usec\nrounds: 5814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.945399447326878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005455245551337182",
            "extra": "mean: 40.0875520999989 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10392.174299042179,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034529663251771916",
            "extra": "mean: 96.22625364281731 usec\nrounds: 4735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 60.8521042118851,
            "unit": "iter/sec",
            "range": "stddev: 0.02116709107763953",
            "extra": "mean: 16.433285470590004 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.31512584971298,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236098608385933",
            "extra": "mean: 4.010988088234965 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.34383564168186,
            "unit": "iter/sec",
            "range": "stddev: 0.0006853247562103911",
            "extra": "mean: 11.192713999996066 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5302.683570121597,
            "unit": "iter/sec",
            "range": "stddev: 0.00004866064845158116",
            "extra": "mean: 188.58375891682118 usec\nrounds: 3028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 99030.1469787996,
            "unit": "iter/sec",
            "range": "stddev: 4.3143447263431345e-7",
            "extra": "mean: 10.097935128926752 usec\nrounds: 31447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8641364631084765,
            "unit": "iter/sec",
            "range": "stddev: 0.005131364370165674",
            "extra": "mean: 1.1572246313999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.77484687207495,
            "unit": "iter/sec",
            "range": "stddev: 0.0009325907058723922",
            "extra": "mean: 23.378225128208186 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4700740.392852641,
            "unit": "iter/sec",
            "range": "stddev: 1.0958779092421876e-8",
            "extra": "mean: 212.73244562110776 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.70110632424206,
            "unit": "iter/sec",
            "range": "stddev: 0.0006328887663606982",
            "extra": "mean: 6.910797197080366 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1553641.372595991,
            "unit": "iter/sec",
            "range": "stddev: 1.0859887980987604e-7",
            "extra": "mean: 643.6491829057645 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.903243886325207,
            "unit": "iter/sec",
            "range": "stddev: 0.0008570062551521876",
            "extra": "mean: 203.94661639999754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1573466.7667460465,
            "unit": "iter/sec",
            "range": "stddev: 9.410887979626069e-8",
            "extra": "mean: 635.5393206480079 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5908610359339537,
            "unit": "iter/sec",
            "range": "stddev: 0.0016406180900879082",
            "extra": "mean: 1.6924453283999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.81180091986113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006643800292242942",
            "extra": "mean: 6.142060921568074 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9627.708772438978,
            "unit": "iter/sec",
            "range": "stddev: 0.000013594177993214376",
            "extra": "mean: 103.86687254839667 usec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.1035661338879,
            "unit": "iter/sec",
            "range": "stddev: 0.0002015324029569883",
            "extra": "mean: 3.9354032500004235 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 250.53241648111646,
            "unit": "iter/sec",
            "range": "stddev: 0.00012443279294198364",
            "extra": "mean: 3.9914994396558403 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10280.218469549973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037252343305432502",
            "extra": "mean: 97.27419732975538 usec\nrounds: 674"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 562947.6521731459,
            "unit": "iter/sec",
            "range": "stddev: 2.860161646526228e-7",
            "extra": "mean: 1.7763641008887803 usec\nrounds: 20747"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5180.177902241849,
            "unit": "iter/sec",
            "range": "stddev: 0.00005207617227583203",
            "extra": "mean: 193.04356315006584 usec\nrounds: 2019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.03478626601444,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459146500239064",
            "extra": "mean: 11.231565121212752 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.70328165747623,
            "unit": "iter/sec",
            "range": "stddev: 0.0006535114502495051",
            "extra": "mean: 6.679880286712871 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1523451.6514209402,
            "unit": "iter/sec",
            "range": "stddev: 1.1299565974758888e-7",
            "extra": "mean: 656.4041589815397 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.83059045991257,
            "unit": "iter/sec",
            "range": "stddev: 0.00019693314693595125",
            "extra": "mean: 3.6254136944442115 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.65758845416634,
            "unit": "iter/sec",
            "range": "stddev: 0.015921904593806244",
            "extra": "mean: 13.045022941178237 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 242.32216255712362,
            "unit": "iter/sec",
            "range": "stddev: 0.00022168486356510434",
            "extra": "mean: 4.126737684442156 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.88583064001696,
            "unit": "iter/sec",
            "range": "stddev: 0.00009103251990850982",
            "extra": "mean: 14.730614482759611 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5861629358162428,
            "unit": "iter/sec",
            "range": "stddev: 0.0017591196848755675",
            "extra": "mean: 630.452255199998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.80520088464976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000973929732542691",
            "extra": "mean: 6.9538514173915615 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.0145616361827,
            "unit": "iter/sec",
            "range": "stddev: 0.0007237617449096755",
            "extra": "mean: 6.3688360466661225 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 415.85535556581027,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606935275594088",
            "extra": "mean: 2.4046822690053036 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 140.05105543343004,
            "unit": "iter/sec",
            "range": "stddev: 0.012882877381746908",
            "extra": "mean: 7.140253223406276 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4527.964528584203,
            "unit": "iter/sec",
            "range": "stddev: 0.000019346647169348402",
            "extra": "mean: 220.84978662866828 usec\nrounds: 1406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5331161.6190557,
            "unit": "iter/sec",
            "range": "stddev: 5.427009999206323e-9",
            "extra": "mean: 187.5763804318755 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.55254957437559,
            "unit": "iter/sec",
            "range": "stddev: 0.00028300738270317736",
            "extra": "mean: 10.922688714284451 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 238.02970664719837,
            "unit": "iter/sec",
            "range": "stddev: 0.00011450610208268855",
            "extra": "mean: 4.201156292992349 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7512154897623112,
            "unit": "iter/sec",
            "range": "stddev: 0.0008805434533901892",
            "extra": "mean: 1.3311759590000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1497593.0258552022,
            "unit": "iter/sec",
            "range": "stddev: 1.2750886535335048e-7",
            "extra": "mean: 667.7381523120735 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.99407575636288,
            "unit": "iter/sec",
            "range": "stddev: 0.00026393397404506856",
            "extra": "mean: 9.804491021505386 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1463.359871978522,
            "unit": "iter/sec",
            "range": "stddev: 0.000006024871020328825",
            "extra": "mean: 683.3589051802817 usec\nrounds: 1139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 518.2887408902253,
            "unit": "iter/sec",
            "range": "stddev: 0.000018699722838681094",
            "extra": "mean: 1.929426439560265 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5268.204655294906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000470095336808854",
            "extra": "mean: 189.81798647380407 usec\nrounds: 2144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.1946275904206,
            "unit": "iter/sec",
            "range": "stddev: 0.00021972188800161888",
            "extra": "mean: 3.8881060983609976 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.82686171281873,
            "unit": "iter/sec",
            "range": "stddev: 0.00045467542906822944",
            "extra": "mean: 4.508020319444536 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.7929143606757,
            "unit": "iter/sec",
            "range": "stddev: 0.00014619482538896162",
            "extra": "mean: 7.0031486119411674 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.229137167191103,
            "unit": "iter/sec",
            "range": "stddev: 0.00028897716459542046",
            "extra": "mean: 108.35249079999869 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.23680586841967,
            "unit": "iter/sec",
            "range": "stddev: 0.000288703137920654",
            "extra": "mean: 10.50014215493128 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.403094231998516,
            "unit": "iter/sec",
            "range": "stddev: 0.00034381930613366674",
            "extra": "mean: 18.381307425926252 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.1751193392578,
            "unit": "iter/sec",
            "range": "stddev: 0.00022047715920710297",
            "extra": "mean: 3.98128605504639 msec\nrounds: 218"
          }
        ]
      }
    ]
  }
}