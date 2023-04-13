window.BENCHMARK_DATA = {
  "lastUpdate": 1681398603893,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bef7aed4754fb312a019870b6bea8aa312a842d6",
          "message": "chore(deps): bump lower bound of ipython in dev dependencies\n\nWe had a contributor run into issues with a very old version of\n`prompt_toolkit` (3.0.4, ~3 years old) in the conda-lock files cause\ntrouble.\n\nThis bumps the lower bound of `ipython` (which is the package that pulls\nin `prompt_toolkit`) so that we get a less-old version.\n\nI don't think this counts as a breaking change in that it only impacts\ndev dependencies.",
          "timestamp": "2023-04-13T11:03:34-04:00",
          "tree_id": "7fd45cb3b2157fc39b5b989a3677fed96cd34a69",
          "url": "https://github.com/ibis-project/ibis/commit/bef7aed4754fb312a019870b6bea8aa312a842d6"
        },
        "date": 1681398525464,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.331520312964445,
            "unit": "iter/sec",
            "range": "stddev: 0.015575636427496348",
            "extra": "mean: 69.77626784615373 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 656.2804552551177,
            "unit": "iter/sec",
            "range": "stddev: 0.00004258405156969789",
            "extra": "mean: 1.523738810126941 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17566830399601158,
            "unit": "iter/sec",
            "range": "stddev: 0.059374104026640236",
            "extra": "mean: 5.692546562199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2215.699997384772,
            "unit": "iter/sec",
            "range": "stddev: 0.00008439220683301473",
            "extra": "mean: 451.3246383446843 usec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.17897359121608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006876824975029821",
            "extra": "mean: 9.883476423077845 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8219.53343626242,
            "unit": "iter/sec",
            "range": "stddev: 0.000014431004821076433",
            "extra": "mean: 121.66140666674134 usec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745466.2461177723,
            "unit": "iter/sec",
            "range": "stddev: 0.000004278351578058326",
            "extra": "mean: 1.341442359339252 usec\nrounds: 23924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7121534.292266808,
            "unit": "iter/sec",
            "range": "stddev: 4.119806736224946e-9",
            "extra": "mean: 140.41917920496735 nsec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.384748391595576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002803911979272133",
            "extra": "mean: 87.83681163636588 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.38959483017015,
            "unit": "iter/sec",
            "range": "stddev: 0.00026923845697709585",
            "extra": "mean: 3.671212186440093 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.397781235744475,
            "unit": "iter/sec",
            "range": "stddev: 0.01839131289382777",
            "extra": "mean: 25.38214002500041 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2205.9666495703927,
            "unit": "iter/sec",
            "range": "stddev: 0.00007596319473338052",
            "extra": "mean: 453.31601010139826 usec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1902864.3715199,
            "unit": "iter/sec",
            "range": "stddev: 8.468893383700485e-8",
            "extra": "mean: 525.5235291421515 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12095.31799441105,
            "unit": "iter/sec",
            "range": "stddev: 0.00004396667431225662",
            "extra": "mean: 82.67661920604944 usec\nrounds: 3905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.54896527594818,
            "unit": "iter/sec",
            "range": "stddev: 0.000056365010839830024",
            "extra": "mean: 5.193484153845582 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.2218040608769,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646615275354172",
            "extra": "mean: 3.518378905883702 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.83171746593655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815215404847623",
            "extra": "mean: 9.91751430136876 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4475.73072570279,
            "unit": "iter/sec",
            "range": "stddev: 0.000028507088561841546",
            "extra": "mean: 223.42720357533966 usec\nrounds: 2014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5581789.149289073,
            "unit": "iter/sec",
            "range": "stddev: 8.226722787683731e-9",
            "extra": "mean: 179.15402629062052 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.6845908513077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772214775019005",
            "extra": "mean: 10.906958200007466 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.9085418439028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004667224179120078",
            "extra": "mean: 9.098473905879366 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.15811082059057,
            "unit": "iter/sec",
            "range": "stddev: 0.00037264040214230826",
            "extra": "mean: 15.58649385416544 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14034.61829034719,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012618895189913259",
            "extra": "mean: 71.25238316511862 usec\nrounds: 6154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.53449468203735,
            "unit": "iter/sec",
            "range": "stddev: 0.013678990545063037",
            "extra": "mean: 11.691189662338706 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.311909328249094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003168289820112828",
            "extra": "mean: 17.149155490189926 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.6086274048599,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074178721458435",
            "extra": "mean: 10.459307147726804 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.75138257763584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325084433711476",
            "extra": "mean: 9.925422107527226 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.34317680577126,
            "unit": "iter/sec",
            "range": "stddev: 0.00031579882769035457",
            "extra": "mean: 7.613642553193213 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 61.02742106767321,
            "unit": "iter/sec",
            "range": "stddev: 0.0210913855744862",
            "extra": "mean: 16.386076660377007 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.23104160704304,
            "unit": "iter/sec",
            "range": "stddev: 0.00022227359185221713",
            "extra": "mean: 3.5812637242792027 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.34843144457471,
            "unit": "iter/sec",
            "range": "stddev: 0.00008880187664583819",
            "extra": "mean: 8.594873068627258 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9333284999361584,
            "unit": "iter/sec",
            "range": "stddev: 0.008012819287520987",
            "extra": "mean: 1.0714341199999808 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2240.7486527651085,
            "unit": "iter/sec",
            "range": "stddev: 0.00007849025848012885",
            "extra": "mean: 446.2794159291311 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2209.2676675811185,
            "unit": "iter/sec",
            "range": "stddev: 0.00008208089418474079",
            "extra": "mean: 452.63867962856636 usec\nrounds: 1723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.23346485393455,
            "unit": "iter/sec",
            "range": "stddev: 0.00025818892475836793",
            "extra": "mean: 3.5431659407134233 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 239.3984638981263,
            "unit": "iter/sec",
            "range": "stddev: 0.003356528755067963",
            "extra": "mean: 4.177136242718501 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1711.3397024126714,
            "unit": "iter/sec",
            "range": "stddev: 0.000011873368783407655",
            "extra": "mean: 584.3375214109657 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8211518910933466,
            "unit": "iter/sec",
            "range": "stddev: 0.0011588933048950058",
            "extra": "mean: 549.1030182000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.19771744730633,
            "unit": "iter/sec",
            "range": "stddev: 0.0007583582035908658",
            "extra": "mean: 9.881645804123004 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2111.3039351076964,
            "unit": "iter/sec",
            "range": "stddev: 0.00010550635132596726",
            "extra": "mean: 473.6409492596292 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10247.09702559827,
            "unit": "iter/sec",
            "range": "stddev: 0.00000348876396162861",
            "extra": "mean: 97.58861436579554 usec\nrounds: 4455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.30060602664537,
            "unit": "iter/sec",
            "range": "stddev: 0.0006633885318272529",
            "extra": "mean: 9.871609255101271 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2132.998554128935,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113592831780391",
            "extra": "mean: 468.82357142917783 usec\nrounds: 1372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.83334859167275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006087909157223643",
            "extra": "mean: 11.385197263158966 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2236.5645463959877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992925479580426",
            "extra": "mean: 447.1143037706671 usec\nrounds: 1883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.4451313404212,
            "unit": "iter/sec",
            "range": "stddev: 0.00001210948144704629",
            "extra": "mean: 1.3290005587763978 msec\nrounds: 621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.579726267312765,
            "unit": "iter/sec",
            "range": "stddev: 0.00013783608960536053",
            "extra": "mean: 20.16953451111097 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.7256751900276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003588912958897877",
            "extra": "mean: 37.417202480000924 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.431744576641435,
            "unit": "iter/sec",
            "range": "stddev: 0.0007369101795823899",
            "extra": "mean: 23.024633473687874 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.39018583076034,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960536857170532",
            "extra": "mean: 10.483258747122928 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.73972265075807,
            "unit": "iter/sec",
            "range": "stddev: 0.00006367498029281539",
            "extra": "mean: 6.380003633336552 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.0243467874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000707140976035404",
            "extra": "mean: 3.4010788933852107 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.92221956020916,
            "unit": "iter/sec",
            "range": "stddev: 0.00008360785997197848",
            "extra": "mean: 6.137898211179491 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.86347125350407,
            "unit": "iter/sec",
            "range": "stddev: 0.00012080228076080146",
            "extra": "mean: 10.013671540232098 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.15525529361778,
            "unit": "iter/sec",
            "range": "stddev: 0.0007892311208000145",
            "extra": "mean: 10.509141054945722 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2748244.129004062,
            "unit": "iter/sec",
            "range": "stddev: 1.393336961628496e-8",
            "extra": "mean: 363.86869326695677 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150465.89435955905,
            "unit": "iter/sec",
            "range": "stddev: 2.837681981039636e-7",
            "extra": "mean: 6.6460243648993425 usec\nrounds: 34722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.8596930999269,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060406781952903",
            "extra": "mean: 3.6919483609954282 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.61100589720976,
            "unit": "iter/sec",
            "range": "stddev: 0.0007479281909477665",
            "extra": "mean: 10.45904695402 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.53553476878326,
            "unit": "iter/sec",
            "range": "stddev: 0.0006760087858117008",
            "extra": "mean: 10.046663257729582 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1675882.4322252928,
            "unit": "iter/sec",
            "range": "stddev: 9.175342745649785e-8",
            "extra": "mean: 596.7005684713613 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.87595747589766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074705584311164",
            "extra": "mean: 10.430143555556052 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.54510901807824,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095286644594638",
            "extra": "mean: 9.046080906541626 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.64132208706235,
            "unit": "iter/sec",
            "range": "stddev: 0.00003499460395642493",
            "extra": "mean: 6.303527900827756 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.6277584721117,
            "unit": "iter/sec",
            "range": "stddev: 0.00007772343724680868",
            "extra": "mean: 12.881989892304528 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.65056122146345,
            "unit": "iter/sec",
            "range": "stddev: 0.003990419636889006",
            "extra": "mean: 6.073468517698817 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.99608348135234,
            "unit": "iter/sec",
            "range": "stddev: 0.00028598869774163204",
            "extra": "mean: 3.597172979838325 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.18369863388192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423960073278777",
            "extra": "mean: 10.396772157893887 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 503582.42774657084,
            "unit": "iter/sec",
            "range": "stddev: 1.8213645532713404e-7",
            "extra": "mean: 1.98577222893737 usec\nrounds: 821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.68352962126553,
            "unit": "iter/sec",
            "range": "stddev: 0.000532597781761296",
            "extra": "mean: 22.891923081077937 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.73949094647715,
            "unit": "iter/sec",
            "range": "stddev: 0.00012355687850514329",
            "extra": "mean: 9.829024999998058 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11149578.924521044,
            "unit": "iter/sec",
            "range": "stddev: 3.75147287304623e-9",
            "extra": "mean: 89.68948574382492 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7175392510767888,
            "unit": "iter/sec",
            "range": "stddev: 0.0032703351740759165",
            "extra": "mean: 1.3936519828000087 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9293163258959394,
            "unit": "iter/sec",
            "range": "stddev: 0.006527436590661826",
            "extra": "mean: 1.0760598647999813 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.26041814451371,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458301904856824",
            "extra": "mean: 10.281674900000501 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8598879923143564,
            "unit": "iter/sec",
            "range": "stddev: 0.0019550787212196594",
            "extra": "mean: 1.1629421609999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 76851.65206774564,
            "unit": "iter/sec",
            "range": "stddev: 4.3759201967662565e-7",
            "extra": "mean: 13.012082018984941 usec\nrounds: 13948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1937013.258951303,
            "unit": "iter/sec",
            "range": "stddev: 9.076816080198206e-8",
            "extra": "mean: 516.2587273880607 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.627960070692696,
            "unit": "iter/sec",
            "range": "stddev: 0.002586913698956834",
            "extra": "mean: 380.5232853999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.07002922446678,
            "unit": "iter/sec",
            "range": "stddev: 0.000728100996604061",
            "extra": "mean: 9.894129918366763 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6080493.7285740655,
            "unit": "iter/sec",
            "range": "stddev: 1.147944302730521e-8",
            "extra": "mean: 164.46032915046183 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2152.4075672400318,
            "unit": "iter/sec",
            "range": "stddev: 0.00008323406824552998",
            "extra": "mean: 464.59602503733544 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.738830429686691,
            "unit": "iter/sec",
            "range": "stddev: 0.0015273721718095177",
            "extra": "mean: 174.25153300000792 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.5388509889253,
            "unit": "iter/sec",
            "range": "stddev: 0.000011064234756933527",
            "extra": "mean: 857.9722581975964 usec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.99181800572893,
            "unit": "iter/sec",
            "range": "stddev: 0.00004393911884019263",
            "extra": "mean: 3.496603528636501 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 209.00075980413922,
            "unit": "iter/sec",
            "range": "stddev: 0.012456075011352812",
            "extra": "mean: 4.784671600893363 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.71971954312835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648811998553072",
            "extra": "mean: 3.6268715261172275 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 505.5698100624985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006123416985690376",
            "extra": "mean: 1.977966207824751 msec\nrounds: 409"
          }
        ]
      }
    ]
  }
}