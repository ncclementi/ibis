window.BENCHMARK_DATA = {
  "lastUpdate": 1678461128840,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "dc80512c05b6c075a4b501bc64f32927cf59c7a4",
          "message": "chore: regenerate sql",
          "timestamp": "2023-03-10T10:03:41-05:00",
          "tree_id": "a68f5709da5be69f16cea9811acd99dd6d0d318f",
          "url": "https://github.com/ibis-project/ibis/commit/dc80512c05b6c075a4b501bc64f32927cf59c7a4"
        },
        "date": 1678461041446,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137903.71255482998,
            "unit": "iter/sec",
            "range": "stddev: 3.3667848486806687e-7",
            "extra": "mean: 7.25143639336326 usec\nrounds: 21460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.28684967219993,
            "unit": "iter/sec",
            "range": "stddev: 0.00843411755021762",
            "extra": "mean: 10.954480339620432 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5732.105341722542,
            "unit": "iter/sec",
            "range": "stddev: 0.00005975598492972835",
            "extra": "mean: 174.4559704304897 usec\nrounds: 744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.13991697261984,
            "unit": "iter/sec",
            "range": "stddev: 0.0006079632774361982",
            "extra": "mean: 9.887293068183116 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.49732474423104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006395729821875411",
            "extra": "mean: 9.478913350877965 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.471181501752516,
            "unit": "iter/sec",
            "range": "stddev: 0.00042485353418698587",
            "extra": "mean: 95.50020690908991 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.8254612254678,
            "unit": "iter/sec",
            "range": "stddev: 0.000026737386084696086",
            "extra": "mean: 1.3354246774187941 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5362.858120094864,
            "unit": "iter/sec",
            "range": "stddev: 0.000022499827634681836",
            "extra": "mean: 186.46773373566535 usec\nrounds: 1491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7276474.421473001,
            "unit": "iter/sec",
            "range": "stddev: 4.983623028303684e-9",
            "extra": "mean: 137.4291919516284 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5293.354481400326,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694620965698917",
            "extra": "mean: 188.9161218115617 usec\nrounds: 2274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.78720164922306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006143804712511391",
            "extra": "mean: 8.27902282978697 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13421.606479563367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018727007246331088",
            "extra": "mean: 74.50672924457045 usec\nrounds: 6685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.68554542362928,
            "unit": "iter/sec",
            "range": "stddev: 0.000842217540110647",
            "extra": "mean: 27.25869244827683 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7648.490001180189,
            "unit": "iter/sec",
            "range": "stddev: 0.000016519486837430336",
            "extra": "mean: 130.74476136409885 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 487806.78079891467,
            "unit": "iter/sec",
            "range": "stddev: 4.766228829406883e-7",
            "extra": "mean: 2.0499920037237516 usec\nrounds: 2126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11894.011880234782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017666697193993054",
            "extra": "mean: 84.07592072963865 usec\nrounds: 2851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.2075180008996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002784561492876047",
            "extra": "mean: 3.568783618420936 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.85809388896203,
            "unit": "iter/sec",
            "range": "stddev: 0.009597964370200683",
            "extra": "mean: 9.722132329999482 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7753205624261645,
            "unit": "iter/sec",
            "range": "stddev: 0.0023089651526753633",
            "extra": "mean: 563.2785543999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.79641380342495,
            "unit": "iter/sec",
            "range": "stddev: 0.0006770298959405963",
            "extra": "mean: 9.54231126530513 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1882292.3163742898,
            "unit": "iter/sec",
            "range": "stddev: 1.0548066394001063e-7",
            "extra": "mean: 531.2671104805977 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 106.40654498219689,
            "unit": "iter/sec",
            "range": "stddev: 0.01070682478686938",
            "extra": "mean: 9.397918146551154 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2548554.489955038,
            "unit": "iter/sec",
            "range": "stddev: 1.814417151725634e-8",
            "extra": "mean: 392.379289491639 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.801391267057,
            "unit": "iter/sec",
            "range": "stddev: 0.00026053647803947136",
            "extra": "mean: 3.3024947336455455 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.279953347918514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005944827701367359",
            "extra": "mean: 24.224833578946466 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.0058910954461,
            "unit": "iter/sec",
            "range": "stddev: 0.00022896783466718604",
            "extra": "mean: 3.366936582677544 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5476419689099,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258221635171817",
            "extra": "mean: 1.8397651333334244 msec\nrounds: 390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1180.8394469541186,
            "unit": "iter/sec",
            "range": "stddev: 0.000029011757290660326",
            "extra": "mean: 846.8551779663361 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.30069152695168,
            "unit": "iter/sec",
            "range": "stddev: 0.004334734993767968",
            "extra": "mean: 5.941746233644322 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.41781922947991,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496790747277283",
            "extra": "mean: 16.021065976744353 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.06081722709625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006420595792481172",
            "extra": "mean: 9.703008640000235 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.66826482555864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866013317911704",
            "extra": "mean: 8.287183058823523 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.590152203635533,
            "unit": "iter/sec",
            "range": "stddev: 0.00011599534014954098",
            "extra": "mean: 64.14305562499933 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.03543287970261,
            "unit": "iter/sec",
            "range": "stddev: 0.00013206720091543783",
            "extra": "mean: 10.52239117241478 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.01545399794207,
            "unit": "iter/sec",
            "range": "stddev: 0.000032714074052240284",
            "extra": "mean: 5.101638567796286 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.42049364645023,
            "unit": "iter/sec",
            "range": "stddev: 0.0001246460674805498",
            "extra": "mean: 21.087928933334865 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.90607093705074,
            "unit": "iter/sec",
            "range": "stddev: 0.00009032418347136176",
            "extra": "mean: 6.253671259258593 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.53969216525968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005996871410093497",
            "extra": "mean: 8.965418324074069 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.34345340430593,
            "unit": "iter/sec",
            "range": "stddev: 0.000026360312205545394",
            "extra": "mean: 7.281016861111259 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.3947312001675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004144947823751054",
            "extra": "mean: 3.3400721381814367 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5661.852036426476,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296603323722051",
            "extra": "mean: 176.62065231771018 usec\nrounds: 2114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5547.343440486102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000447893223301266",
            "extra": "mean: 180.26646641376365 usec\nrounds: 2635"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.95949583720476,
            "unit": "iter/sec",
            "range": "stddev: 0.00009200489756757419",
            "extra": "mean: 13.340537964286423 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.46845178409805,
            "unit": "iter/sec",
            "range": "stddev: 0.00045905941937872125",
            "extra": "mean: 9.855279965518486 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.18093527292555,
            "unit": "iter/sec",
            "range": "stddev: 0.0004994876402889674",
            "extra": "mean: 28.424485939393918 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 103.72258022451476,
            "unit": "iter/sec",
            "range": "stddev: 0.013828746099077556",
            "extra": "mean: 9.641102234782728 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9178035207934996,
            "unit": "iter/sec",
            "range": "stddev: 0.0025615061494252958",
            "extra": "mean: 1.0895578164000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.6435419839587,
            "unit": "iter/sec",
            "range": "stddev: 0.00003105599639853685",
            "extra": "mean: 2.827706097473031 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.282538139345,
            "unit": "iter/sec",
            "range": "stddev: 0.00010215982888756188",
            "extra": "mean: 6.2002992483663615 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5802.993018489211,
            "unit": "iter/sec",
            "range": "stddev: 0.00004301847489731551",
            "extra": "mean: 172.32486698051318 usec\nrounds: 2338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.629041639388,
            "unit": "iter/sec",
            "range": "stddev: 0.000016628791618058194",
            "extra": "mean: 1.4542724920632832 msec\nrounds: 504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.87792227714098,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975822654009758",
            "extra": "mean: 10.766821387499093 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68540.46409098894,
            "unit": "iter/sec",
            "range": "stddev: 7.298763362028556e-7",
            "extra": "mean: 14.589921636253855 usec\nrounds: 4326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8526535678956036,
            "unit": "iter/sec",
            "range": "stddev: 0.0018520598809262064",
            "extra": "mean: 1.1728092599999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6786740417257202,
            "unit": "iter/sec",
            "range": "stddev: 0.008792811514963387",
            "extra": "mean: 1.4734613946000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.96272675531674,
            "unit": "iter/sec",
            "range": "stddev: 0.0002757163497142515",
            "extra": "mean: 10.003728714281124 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1881482.111541575,
            "unit": "iter/sec",
            "range": "stddev: 1.20385831037097e-7",
            "extra": "mean: 531.4958850077289 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 670439.2021396313,
            "unit": "iter/sec",
            "range": "stddev: 0.000013572324342876157",
            "extra": "mean: 1.4915595579861867 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5386.217307782688,
            "unit": "iter/sec",
            "range": "stddev: 0.00004528668045808003",
            "extra": "mean: 185.65905214315686 usec\nrounds: 2263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.551955040741897,
            "unit": "iter/sec",
            "range": "stddev: 0.00025632563048412775",
            "extra": "mean: 180.1167323333317 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.96269447312287,
            "unit": "iter/sec",
            "range": "stddev: 0.00014585906816184412",
            "extra": "mean: 8.54973463551485 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12986799.445479201,
            "unit": "iter/sec",
            "range": "stddev: 3.793749216973837e-9",
            "extra": "mean: 77.00126610853383 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.91881814004444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113684194861157",
            "extra": "mean: 10.425482917647809 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.1455031225732,
            "unit": "iter/sec",
            "range": "stddev: 0.00000478435917190053",
            "extra": "mean: 569.1048340748837 usec\nrounds: 1350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 310.27321766934983,
            "unit": "iter/sec",
            "range": "stddev: 0.00021929930732286068",
            "extra": "mean: 3.222965899253587 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.4990245524683,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935590844618032",
            "extra": "mean: 6.644561338345227 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.24506742509153,
            "unit": "iter/sec",
            "range": "stddev: 0.0007048738489005774",
            "extra": "mean: 9.592780020201726 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5767713.005065089,
            "unit": "iter/sec",
            "range": "stddev: 1.1252579146774499e-8",
            "extra": "mean: 173.37894571422652 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.70741091383748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003161023333193956",
            "extra": "mean: 14.554470714288012 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.29959863433845,
            "unit": "iter/sec",
            "range": "stddev: 0.0002498825261054452",
            "extra": "mean: 3.2226918900350063 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17701669853257887,
            "unit": "iter/sec",
            "range": "stddev: 0.16702058221743338",
            "extra": "mean: 5.6491845588000045 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9235564856644434,
            "unit": "iter/sec",
            "range": "stddev: 0.0028810971289694232",
            "extra": "mean: 1.0827708056000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.2134797223585,
            "unit": "iter/sec",
            "range": "stddev: 0.00005760325524677635",
            "extra": "mean: 3.1035324805829645 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.8283338709722,
            "unit": "iter/sec",
            "range": "stddev: 0.007855921146613843",
            "extra": "mean: 3.7477279323850263 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.562405040408146,
            "unit": "iter/sec",
            "range": "stddev: 0.002931485583801434",
            "extra": "mean: 390.25836440000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.06830420436715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007343690306117389",
            "extra": "mean: 8.923129577979564 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1697313.457119631,
            "unit": "iter/sec",
            "range": "stddev: 1.213992448461135e-7",
            "extra": "mean: 589.1663651197442 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.00602235079994,
            "unit": "iter/sec",
            "range": "stddev: 0.0006543312382693754",
            "extra": "mean: 8.264051495726148 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6425534.373133045,
            "unit": "iter/sec",
            "range": "stddev: 1.0083279069645634e-8",
            "extra": "mean: 155.6290795329603 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.07414494169853,
            "unit": "iter/sec",
            "range": "stddev: 0.004112029482559166",
            "extra": "mean: 4.2539769750008585 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11504.465189098266,
            "unit": "iter/sec",
            "range": "stddev: 0.000012818084491854204",
            "extra": "mean: 86.92277159894482 usec\nrounds: 4190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.01555135685105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003105986350188573",
            "extra": "mean: 18.513186941174588 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.57966289924441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006499250319317931",
            "extra": "mean: 39.0935566249991 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5770.144531355496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000447421401444996",
            "extra": "mean: 173.30588420548358 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4117.459543906103,
            "unit": "iter/sec",
            "range": "stddev: 0.003304702217453758",
            "extra": "mean: 242.86820291410362 usec\nrounds: 2745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.785918593049,
            "unit": "iter/sec",
            "range": "stddev: 0.00022222662863794875",
            "extra": "mean: 3.380823552238907 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.19514159135949,
            "unit": "iter/sec",
            "range": "stddev: 0.0007031729693462414",
            "extra": "mean: 8.389603692307627 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 307.35152363803047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002379995472795782",
            "extra": "mean: 3.253603522648241 msec\nrounds: 287"
          }
        ]
      }
    ]
  }
}