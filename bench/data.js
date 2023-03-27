window.BENCHMARK_DATA = {
  "lastUpdate": 1679924273083,
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
          "id": "c9630cc4338731a3150acc5e5bc680d0202dee5a",
          "message": "test(sqlite): run tests in parallel",
          "timestamp": "2023-03-27T09:23:21-04:00",
          "tree_id": "2fdd266b6688973709bf4f97117c94c34c27ebb8",
          "url": "https://github.com/ibis-project/ibis/commit/c9630cc4338731a3150acc5e5bc680d0202dee5a"
        },
        "date": 1679924185315,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.32423112397653,
            "unit": "iter/sec",
            "range": "stddev: 0.012139721389546578",
            "extra": "mean: 11.720000131580383 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.39077084587232,
            "unit": "iter/sec",
            "range": "stddev: 0.0010790765011093378",
            "extra": "mean: 10.06129635065135 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8612.407597785192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001465309373282799",
            "extra": "mean: 116.1115505328806 usec\nrounds: 3097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.52979229373891,
            "unit": "iter/sec",
            "range": "stddev: 0.002284592804157999",
            "extra": "mean: 28.96049856000218 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.3036128825843925,
            "unit": "iter/sec",
            "range": "stddev: 0.03347804863682973",
            "extra": "mean: 232.3629070000095 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 563.5867757972628,
            "unit": "iter/sec",
            "range": "stddev: 0.00036115352029379315",
            "extra": "mean: 1.7743496528735563 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.75144438250375,
            "unit": "iter/sec",
            "range": "stddev: 0.0011237574776471332",
            "extra": "mean: 13.029070762712054 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 742865.6950392133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022476071512449807",
            "extra": "mean: 1.3461383486650484 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5291695.063697832,
            "unit": "iter/sec",
            "range": "stddev: 3.0340791799993325e-7",
            "extra": "mean: 188.9753638412526 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 121.46130189474566,
            "unit": "iter/sec",
            "range": "stddev: 0.001229538282602359",
            "extra": "mean: 8.233074933336107 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5154772765711012,
            "unit": "iter/sec",
            "range": "stddev: 0.02151827854988015",
            "extra": "mean: 1.9399497232000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3726.121152631831,
            "unit": "iter/sec",
            "range": "stddev: 0.000049559580270462415",
            "extra": "mean: 268.37559999724664 usec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 610.531935044427,
            "unit": "iter/sec",
            "range": "stddev: 0.00014129111972467447",
            "extra": "mean: 1.6379159591827617 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3932.576448304325,
            "unit": "iter/sec",
            "range": "stddev: 0.00010122951182196176",
            "extra": "mean: 254.28622002534414 usec\nrounds: 1568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10394.736161964838,
            "unit": "iter/sec",
            "range": "stddev: 0.00007523750569131633",
            "extra": "mean: 96.2025379402201 usec\nrounds: 2214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 232.9754995991775,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637108083815726",
            "extra": "mean: 4.292296836879625 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.20883470740806,
            "unit": "iter/sec",
            "range": "stddev: 0.0014986347776485558",
            "extra": "mean: 12.313931157896269 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.43744144023607,
            "unit": "iter/sec",
            "range": "stddev: 0.0010278812294050787",
            "extra": "mean: 11.569060621622082 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.09250842797623,
            "unit": "iter/sec",
            "range": "stddev: 0.0016992385607067036",
            "extra": "mean: 17.51543289189207 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 291.95072931987806,
            "unit": "iter/sec",
            "range": "stddev: 0.0003357703337499098",
            "extra": "mean: 3.4252354920625745 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1587326.754412079,
            "unit": "iter/sec",
            "range": "stddev: 0.000010042511955045958",
            "extra": "mean: 629.990011332219 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.00620075101115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006065496448386657",
            "extra": "mean: 8.695183333331771 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.47717263401204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007029928465416499",
            "extra": "mean: 13.249038949153393 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.86349516169045,
            "unit": "iter/sec",
            "range": "stddev: 0.002209310875099746",
            "extra": "mean: 31.38387659374864 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.79760423136122,
            "unit": "iter/sec",
            "range": "stddev: 0.0006805040511707419",
            "extra": "mean: 4.468323078946829 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1709785.15960764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023788882542402407",
            "extra": "mean: 584.8688031831315 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3780.2100198463045,
            "unit": "iter/sec",
            "range": "stddev: 0.00013891867183442303",
            "extra": "mean: 264.535566740987 usec\nrounds: 1798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 234.62056160838304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004609942160717638",
            "extra": "mean: 4.262201032785652 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.11284201389725,
            "unit": "iter/sec",
            "range": "stddev: 0.0008535573861553011",
            "extra": "mean: 10.62554247222004 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.12933285121768,
            "unit": "iter/sec",
            "range": "stddev: 0.0010971168046866584",
            "extra": "mean: 10.623680947368616 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.72026242230487,
            "unit": "iter/sec",
            "range": "stddev: 0.013015485697655803",
            "extra": "mean: 11.271382350516957 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 440.11725131792224,
            "unit": "iter/sec",
            "range": "stddev: 0.00022277588056005628",
            "extra": "mean: 2.272121797101841 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.37049962673689,
            "unit": "iter/sec",
            "range": "stddev: 0.000938050963174055",
            "extra": "mean: 9.76843918556809 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10139641299016774,
            "unit": "iter/sec",
            "range": "stddev: 0.07954825975883202",
            "extra": "mean: 9.86228181560001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5684491832812419,
            "unit": "iter/sec",
            "range": "stddev: 0.030453004521323025",
            "extra": "mean: 1.7591721994000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5281127984482369,
            "unit": "iter/sec",
            "range": "stddev: 0.08016513534624431",
            "extra": "mean: 1.8935348716000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 180.31230476144447,
            "unit": "iter/sec",
            "range": "stddev: 0.004115691669309178",
            "extra": "mean: 5.545933214724381 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.80555297257365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005495550985706707",
            "extra": "mean: 6.720179321428347 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.31412084097379,
            "unit": "iter/sec",
            "range": "stddev: 0.0010603970128400585",
            "extra": "mean: 9.870292430110856 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4528356.974126206,
            "unit": "iter/sec",
            "range": "stddev: 4.2819607188641656e-7",
            "extra": "mean: 220.83064690218842 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123179.0778611268,
            "unit": "iter/sec",
            "range": "stddev: 0.000017245880042757673",
            "extra": "mean: 8.118261780847304 usec\nrounds: 33784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 217.28678112884288,
            "unit": "iter/sec",
            "range": "stddev: 0.0007623323925820228",
            "extra": "mean: 4.602212775231078 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 211.01924867711554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006363888681912657",
            "extra": "mean: 4.738904181817643 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.51419398080989,
            "unit": "iter/sec",
            "range": "stddev: 0.001978274392450353",
            "extra": "mean: 23.521556129027903 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7907674246265732,
            "unit": "iter/sec",
            "range": "stddev: 0.012787635199214204",
            "extra": "mean: 558.4198071999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 203.53720004861873,
            "unit": "iter/sec",
            "range": "stddev: 0.0006912687352506167",
            "extra": "mean: 4.913106792080913 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.16311798566953,
            "unit": "iter/sec",
            "range": "stddev: 0.0008780306327613612",
            "extra": "mean: 11.881689081080268 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4173.4680115730625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000992849818622176",
            "extra": "mean: 239.60888096589966 usec\nrounds: 3562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 227.43486759808658,
            "unit": "iter/sec",
            "range": "stddev: 0.0005880666081549252",
            "extra": "mean: 4.396863201148024 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.16989968705834,
            "unit": "iter/sec",
            "range": "stddev: 0.005159255725806289",
            "extra": "mean: 122.40052366665724 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 48.543175783463774,
            "unit": "iter/sec",
            "range": "stddev: 0.021880218996219777",
            "extra": "mean: 20.60021792683473 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.02172834860491,
            "unit": "iter/sec",
            "range": "stddev: 0.00097877351945126",
            "extra": "mean: 11.624969867467419 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 231.02118810716308,
            "unit": "iter/sec",
            "range": "stddev: 0.0005566724608161866",
            "extra": "mean: 4.3286072943929845 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.7146452582278,
            "unit": "iter/sec",
            "range": "stddev: 0.001228227320259182",
            "extra": "mean: 11.945341187499281 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10427250.645735312,
            "unit": "iter/sec",
            "range": "stddev: 2.0757026683254147e-7",
            "extra": "mean: 95.90255705688332 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.42545027163483,
            "unit": "iter/sec",
            "range": "stddev: 0.00026685509881523316",
            "extra": "mean: 12.590422799996759 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.46664017056685,
            "unit": "iter/sec",
            "range": "stddev: 0.0013623565782962532",
            "extra": "mean: 17.401400134615457 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 67.09490414487293,
            "unit": "iter/sec",
            "range": "stddev: 0.020405605353937307",
            "extra": "mean: 14.904261549294057 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.78697862666779,
            "unit": "iter/sec",
            "range": "stddev: 0.001015492726316278",
            "extra": "mean: 10.439832369048048 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.49696998634977,
            "unit": "iter/sec",
            "range": "stddev: 0.0006190696432437825",
            "extra": "mean: 7.326169951611409 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3907.3666564584955,
            "unit": "iter/sec",
            "range": "stddev: 0.00010420255298312033",
            "extra": "mean: 255.92683971623129 usec\nrounds: 2533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6248.736941109994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005859496038607512",
            "extra": "mean: 160.0323408433265 usec\nrounds: 3817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 316283.34449996863,
            "unit": "iter/sec",
            "range": "stddev: 0.00002190712890560021",
            "extra": "mean: 3.1617219730016455 usec\nrounds: 1561"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4169.280408027138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000852590504397059",
            "extra": "mean: 239.84954287907686 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.70343607762386,
            "unit": "iter/sec",
            "range": "stddev: 0.0020832872464008334",
            "extra": "mean: 28.008508699999386 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3921.680483420833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011970913656166839",
            "extra": "mean: 254.99272677301656 usec\nrounds: 2185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1466.8368730868197,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314973660616996",
            "extra": "mean: 681.7390661141443 usec\nrounds: 968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.23004881751385,
            "unit": "iter/sec",
            "range": "stddev: 0.0014008543385847494",
            "extra": "mean: 26.15743455556046 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 241.20605853583737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006075511372711267",
            "extra": "mean: 4.145832845452446 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.677603592663313,
            "unit": "iter/sec",
            "range": "stddev: 0.0019728173637208594",
            "extra": "mean: 50.81919631579755 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69170.34308937451,
            "unit": "iter/sec",
            "range": "stddev: 0.00000736647744342452",
            "extra": "mean: 14.457062887600644 usec\nrounds: 13055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1793513912662064,
            "unit": "iter/sec",
            "range": "stddev: 0.011229436829950295",
            "extra": "mean: 847.9237040000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.17565600301697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006341619551915177",
            "extra": "mean: 9.8838005060247 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1681269.5996023312,
            "unit": "iter/sec",
            "range": "stddev: 0.000003668979723919149",
            "extra": "mean: 594.7886051330072 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.78782437861442,
            "unit": "iter/sec",
            "range": "stddev: 0.0009243015713255816",
            "extra": "mean: 9.72877873469278 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 93.97971519864322,
            "unit": "iter/sec",
            "range": "stddev: 0.0008147178784651997",
            "extra": "mean: 10.640594067414634 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 147.7625943432397,
            "unit": "iter/sec",
            "range": "stddev: 0.004119783535874944",
            "extra": "mean: 6.767612631902542 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.22754029980585,
            "unit": "iter/sec",
            "range": "stddev: 0.0015052622797666825",
            "extra": "mean: 11.872601247056778 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.36482779480923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006012416402209205",
            "extra": "mean: 7.175411585714642 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1751734.932299524,
            "unit": "iter/sec",
            "range": "stddev: 0.000006477452606142726",
            "extra": "mean: 570.8626239971636 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 227.04507625987264,
            "unit": "iter/sec",
            "range": "stddev: 0.00045270001657715447",
            "extra": "mean: 4.404411742694714 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1013.2535018602044,
            "unit": "iter/sec",
            "range": "stddev: 0.00012143694896485736",
            "extra": "mean: 986.9198558545588 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5158011187316955,
            "unit": "iter/sec",
            "range": "stddev: 0.013196861722182944",
            "extra": "mean: 1.9387317391999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5812894.969329888,
            "unit": "iter/sec",
            "range": "stddev: 2.445497107328894e-7",
            "extra": "mean: 172.03132092980522 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4318.967301063793,
            "unit": "iter/sec",
            "range": "stddev: 0.00009948812953056126",
            "extra": "mean: 231.5368305181873 usec\nrounds: 1717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11434.952662177693,
            "unit": "iter/sec",
            "range": "stddev: 0.000048543469420094713",
            "extra": "mean: 87.45117094429303 usec\nrounds: 6663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4210.682048576083,
            "unit": "iter/sec",
            "range": "stddev: 0.00013472908740906142",
            "extra": "mean: 237.49121602239427 usec\nrounds: 2509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.862123729135163,
            "unit": "iter/sec",
            "range": "stddev: 0.005298581497558814",
            "extra": "mean: 84.30193638461631 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}