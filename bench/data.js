window.BENCHMARK_DATA = {
  "lastUpdate": 1680174870492,
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
          "id": "1aa9b97b4d453ca18bd5983b8b6c6c4d4df772d1",
          "message": "ci: avoid building macos nix devShell",
          "timestamp": "2023-03-30T07:09:04-04:00",
          "tree_id": "faeb1116e4f6f879fcc430d043faaa076102c35d",
          "url": "https://github.com/ibis-project/ibis/commit/1aa9b97b4d453ca18bd5983b8b6c6c4d4df772d1"
        },
        "date": 1680174772178,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.568816066780552,
            "unit": "iter/sec",
            "range": "stddev: 0.0004493000560017051",
            "extra": "mean: 179.5713825000007 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.0047428979377,
            "unit": "iter/sec",
            "range": "stddev: 0.00016988493753403776",
            "extra": "mean: 3.225757098591321 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.586803855229807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954938103623722",
            "extra": "mean: 64.15683480000118 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6461170.352494029,
            "unit": "iter/sec",
            "range": "stddev: 9.884386120392277e-9",
            "extra": "mean: 154.77072193529665 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.68294400445056,
            "unit": "iter/sec",
            "range": "stddev: 0.00007010497843824898",
            "extra": "mean: 10.133463387096564 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.11049005600365,
            "unit": "iter/sec",
            "range": "stddev: 0.00039113714255204586",
            "extra": "mean: 21.22669492105108 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11933904.254223809,
            "unit": "iter/sec",
            "range": "stddev: 3.4194846650821972e-9",
            "extra": "mean: 83.7948737224838 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1669633.9473484254,
            "unit": "iter/sec",
            "range": "stddev: 7.39616902011345e-8",
            "extra": "mean: 598.9336774016348 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.88618838663449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003038219441139216",
            "extra": "mean: 9.625918666669028 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 181.7283952969913,
            "unit": "iter/sec",
            "range": "stddev: 0.005126053456831034",
            "extra": "mean: 5.5027173841806105 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.67775399271171,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604822601471182",
            "extra": "mean: 8.218429147368205 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.11949755829767,
            "unit": "iter/sec",
            "range": "stddev: 0.00013324540292392197",
            "extra": "mean: 10.513091696968976 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5222.391479284748,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125993850532619",
            "extra": "mean: 191.48315555557676 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.423855797324018,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705126954598255",
            "extra": "mean: 95.93379066666647 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 515449.5348102623,
            "unit": "iter/sec",
            "range": "stddev: 2.8731100243698586e-7",
            "extra": "mean: 1.9400541322985214 usec\nrounds: 2069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.24089970286597,
            "unit": "iter/sec",
            "range": "stddev: 0.01292275496650271",
            "extra": "mean: 11.59542634000104 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.4678086554145,
            "unit": "iter/sec",
            "range": "stddev: 0.000016899910707001004",
            "extra": "mean: 841.4195089822083 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.498715034151815,
            "unit": "iter/sec",
            "range": "stddev: 0.0006542310277056211",
            "extra": "mean: 36.3653355714279 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.66958582307504,
            "unit": "iter/sec",
            "range": "stddev: 0.00053678877645818",
            "extra": "mean: 9.739982800001219 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5607.444518290612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004703635920441467",
            "extra": "mean: 178.33435475610247 usec\nrounds: 1556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.6636013077316,
            "unit": "iter/sec",
            "range": "stddev: 0.000009720631182322911",
            "extra": "mean: 1.3181072589699432 msec\nrounds: 641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.7777277514076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006001908315013181",
            "extra": "mean: 8.63723981651421 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5799.865958650456,
            "unit": "iter/sec",
            "range": "stddev: 0.00004739715256931779",
            "extra": "mean: 172.41777777786527 usec\nrounds: 2835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.168617972314,
            "unit": "iter/sec",
            "range": "stddev: 0.000216732029480369",
            "extra": "mean: 9.076995049999681 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13360.448567155538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020437627206443635",
            "extra": "mean: 74.84778635788736 usec\nrounds: 777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.625213980666485,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978025114374979",
            "extra": "mean: 380.92132960000527 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8631794527290844,
            "unit": "iter/sec",
            "range": "stddev: 0.0008340661256052853",
            "extra": "mean: 1.1585076507999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9275536004193272,
            "unit": "iter/sec",
            "range": "stddev: 0.010794285040392076",
            "extra": "mean: 1.078104811999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9321187667963212,
            "unit": "iter/sec",
            "range": "stddev: 0.004259169651454689",
            "extra": "mean: 1.0728246609999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.0527621193385,
            "unit": "iter/sec",
            "range": "stddev: 0.00019253565349333884",
            "extra": "mean: 3.3216768813554216 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.0424535606098,
            "unit": "iter/sec",
            "range": "stddev: 0.000019340609727341443",
            "extra": "mean: 1.824676160583984 msec\nrounds: 411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.66085096782838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606327420588338",
            "extra": "mean: 10.676819500001026 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.96178063100091,
            "unit": "iter/sec",
            "range": "stddev: 0.0001481518471010211",
            "extra": "mean: 20.42409379545389 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.18002694799955,
            "unit": "iter/sec",
            "range": "stddev: 0.00008362114193972171",
            "extra": "mean: 6.128200973509272 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.79385067107981,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352004808960564",
            "extra": "mean: 9.452345232324202 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8021.5298773417835,
            "unit": "iter/sec",
            "range": "stddev: 0.000018661450393588886",
            "extra": "mean: 124.66449857958831 usec\nrounds: 1408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7817221857108192,
            "unit": "iter/sec",
            "range": "stddev: 0.0006821992018344691",
            "extra": "mean: 561.2547275999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.8215795407303,
            "unit": "iter/sec",
            "range": "stddev: 0.00001945425624828284",
            "extra": "mean: 1.4517547499988996 msec\nrounds: 572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11698.953343364019,
            "unit": "iter/sec",
            "range": "stddev: 0.000011489585087732986",
            "extra": "mean: 85.47773212269699 usec\nrounds: 6223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.35798700754222,
            "unit": "iter/sec",
            "range": "stddev: 0.000582133324697172",
            "extra": "mean: 9.582400242424448 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5897207.9967589965,
            "unit": "iter/sec",
            "range": "stddev: 1.0520243911872248e-8",
            "extra": "mean: 169.5717703271078 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69464.14447950802,
            "unit": "iter/sec",
            "range": "stddev: 4.936419011855946e-7",
            "extra": "mean: 14.395916159235227 usec\nrounds: 12643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 232.1020123558708,
            "unit": "iter/sec",
            "range": "stddev: 0.00416757664065247",
            "extra": "mean: 4.308450365638142 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.1385350602355,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972522619304798",
            "extra": "mean: 6.572956677965084 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.44647291208517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006126387236131827",
            "extra": "mean: 9.394393000000164 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.61372522850567,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858818502353467",
            "extra": "mean: 9.379655366667805 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5543.476028471041,
            "unit": "iter/sec",
            "range": "stddev: 0.00004675046097317849",
            "extra": "mean: 180.392229507992 usec\nrounds: 2745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.56557740578049,
            "unit": "iter/sec",
            "range": "stddev: 0.0006204536660883369",
            "extra": "mean: 8.29424137068874 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.87615381093242,
            "unit": "iter/sec",
            "range": "stddev: 0.0003641537322553636",
            "extra": "mean: 14.953013040001224 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5328.483272802299,
            "unit": "iter/sec",
            "range": "stddev: 0.00004517293852700764",
            "extra": "mean: 187.67066514109382 usec\nrounds: 2622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6974325.504122597,
            "unit": "iter/sec",
            "range": "stddev: 1.02441546865591e-8",
            "extra": "mean: 143.38304104219546 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1748.0094298489278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000517409531423219",
            "extra": "mean: 572.0792936949003 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.96845725224927,
            "unit": "iter/sec",
            "range": "stddev: 0.00017029208058162468",
            "extra": "mean: 6.290556109588532 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.93702955480603,
            "unit": "iter/sec",
            "range": "stddev: 0.0002064730764268176",
            "extra": "mean: 3.1955310671371526 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.9874826597418,
            "unit": "iter/sec",
            "range": "stddev: 0.000037310615590737124",
            "extra": "mean: 3.4015053666668864 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.95755611018444,
            "unit": "iter/sec",
            "range": "stddev: 0.00002772765923231886",
            "extra": "mean: 2.8332018473287057 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.15537048996305,
            "unit": "iter/sec",
            "range": "stddev: 0.004124645456371219",
            "extra": "mean: 6.243936728070385 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5775.22217583767,
            "unit": "iter/sec",
            "range": "stddev: 0.00004784155644300802",
            "extra": "mean: 173.15351159714552 usec\nrounds: 2242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.83621949061174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006197254202926142",
            "extra": "mean: 9.819688957445928 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12034.268181145713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019547344380196337",
            "extra": "mean: 83.0960374945538 usec\nrounds: 6641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.68739834255169,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337882488004921",
            "extra": "mean: 8.285869226890297 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.7298699440671,
            "unit": "iter/sec",
            "range": "stddev: 0.00001775056705506082",
            "extra": "mean: 3.0889951556610344 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.08626255053116,
            "unit": "iter/sec",
            "range": "stddev: 0.00018518189355305815",
            "extra": "mean: 3.2145424609920386 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.341691012348,
            "unit": "iter/sec",
            "range": "stddev: 0.00032955000321295504",
            "extra": "mean: 7.125466372726082 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5642.556442942014,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469426049242362",
            "extra": "mean: 177.22463392472557 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.27523302482064,
            "unit": "iter/sec",
            "range": "stddev: 0.00019901876335210483",
            "extra": "mean: 3.2023032704630685 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.681737217497698,
            "unit": "iter/sec",
            "range": "stddev: 0.0035811836101822783",
            "extra": "mean: 1.4668408505999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.53701343765951,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054604197361787",
            "extra": "mean: 16.79627415384361 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1916314.403734648,
            "unit": "iter/sec",
            "range": "stddev: 9.234255655213357e-8",
            "extra": "mean: 521.8350381602986 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.9444248382075,
            "unit": "iter/sec",
            "range": "stddev: 0.000676363062706014",
            "extra": "mean: 8.776208238533167 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.21020675629703,
            "unit": "iter/sec",
            "range": "stddev: 0.0006769277741125468",
            "extra": "mean: 8.318761168319982 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.27261841746349,
            "unit": "iter/sec",
            "range": "stddev: 0.00027043911015165465",
            "extra": "mean: 13.836498827588713 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.15539547035196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009105310530617487",
            "extra": "mean: 13.485195428562033 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2583345.8420819435,
            "unit": "iter/sec",
            "range": "stddev: 1.8606032403940392e-8",
            "extra": "mean: 387.09489984271204 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.7552996201506,
            "unit": "iter/sec",
            "range": "stddev: 0.00018727835412191314",
            "extra": "mean: 3.3029975074082656 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1790657552955469,
            "unit": "iter/sec",
            "range": "stddev: 0.07386204280043361",
            "extra": "mean: 5.584540708799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.7413634961482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005843044286588616",
            "extra": "mean: 8.214135042373163 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.79998668653981,
            "unit": "iter/sec",
            "range": "stddev: 0.020342197821955472",
            "extra": "mean: 25.12563654545633 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137526.3229064686,
            "unit": "iter/sec",
            "range": "stddev: 3.4579118405331314e-7",
            "extra": "mean: 7.271335253252558 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.68267051670361,
            "unit": "iter/sec",
            "range": "stddev: 0.000082466755885875",
            "extra": "mean: 8.425829951806302 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2515607.400272139,
            "unit": "iter/sec",
            "range": "stddev: 1.4922643811015352e-8",
            "extra": "mean: 397.51830905405205 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5806.20360073986,
            "unit": "iter/sec",
            "range": "stddev: 0.00005376890476994736",
            "extra": "mean: 172.22957869968155 usec\nrounds: 2338"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 768925.0263869375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015589150016308527",
            "extra": "mean: 1.300516910860411 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5676.55539260531,
            "unit": "iter/sec",
            "range": "stddev: 0.000045447991624934604",
            "extra": "mean: 176.16317129621814 usec\nrounds: 3024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.65250365342979,
            "unit": "iter/sec",
            "range": "stddev: 0.0005719591111032859",
            "extra": "mean: 8.220134974359869 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.9815937961287,
            "unit": "iter/sec",
            "range": "stddev: 0.02873610007470882",
            "extra": "mean: 27.040478717947572 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.2657002071727,
            "unit": "iter/sec",
            "range": "stddev: 0.00026757710805596887",
            "extra": "mean: 3.5427613035024677 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.89126628516823,
            "unit": "iter/sec",
            "range": "stddev: 0.0002203711808660955",
            "extra": "mean: 3.1959984433972752 msec\nrounds: 318"
          }
        ]
      }
    ]
  }
}