window.BENCHMARK_DATA = {
  "lastUpdate": 1680175509005,
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
      },
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
          "id": "961ee69461852aa1d72dd2344b75cd11b3940202",
          "message": "test(duckdb): run register tests with a loadgroup on windows",
          "timestamp": "2023-03-30T07:09:21-04:00",
          "tree_id": "31f9c7e6066543214eed6ba34615eaab48426ff2",
          "url": "https://github.com/ibis-project/ibis/commit/961ee69461852aa1d72dd2344b75cd11b3940202"
        },
        "date": 1680175429404,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.12717917058224,
            "unit": "iter/sec",
            "range": "stddev: 0.017744325590652178",
            "extra": "mean: 12.965598000003334 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13957.058849288765,
            "unit": "iter/sec",
            "range": "stddev: 0.000002275011108203498",
            "extra": "mean: 71.64833299036772 usec\nrounds: 5835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.34815828941069,
            "unit": "iter/sec",
            "range": "stddev: 0.00024959193770343504",
            "extra": "mean: 9.866977524587979 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5801.697207863039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004918822887421258",
            "extra": "mean: 172.3633557857346 usec\nrounds: 1737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 340.1055011641533,
            "unit": "iter/sec",
            "range": "stddev: 0.000020931107009023214",
            "extra": "mean: 2.9402641138619687 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8478304643015282,
            "unit": "iter/sec",
            "range": "stddev: 0.007468249310329134",
            "extra": "mean: 1.1794810897999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.04449994190932,
            "unit": "iter/sec",
            "range": "stddev: 0.00020350739028579312",
            "extra": "mean: 6.449761200008197 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5792.530979685682,
            "unit": "iter/sec",
            "range": "stddev: 0.00004439622405693637",
            "extra": "mean: 172.63610734357482 usec\nrounds: 531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.6715710802172,
            "unit": "iter/sec",
            "range": "stddev: 0.000030350407351979807",
            "extra": "mean: 1.8529788367365367 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.94880061373723,
            "unit": "iter/sec",
            "range": "stddev: 0.0037297915753202768",
            "extra": "mean: 6.252000616215404 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 679.9484855180674,
            "unit": "iter/sec",
            "range": "stddev: 0.000047934277131164146",
            "extra": "mean: 1.470699650486137 msec\nrounds: 515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.642335564685832,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221547569180807",
            "extra": "mean: 177.2315716666668 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16416430856263006,
            "unit": "iter/sec",
            "range": "stddev: 0.1503717311962967",
            "extra": "mean: 6.0914580565999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.38763685205932,
            "unit": "iter/sec",
            "range": "stddev: 0.00037185666751834973",
            "extra": "mean: 15.530931851057941 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5294.066701890059,
            "unit": "iter/sec",
            "range": "stddev: 0.000047110608896568374",
            "extra": "mean: 188.89070657968577 usec\nrounds: 1687"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5568.386309049212,
            "unit": "iter/sec",
            "range": "stddev: 0.000021394939234034862",
            "extra": "mean: 179.5852414863701 usec\nrounds: 1292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5400.060498100446,
            "unit": "iter/sec",
            "range": "stddev: 0.000058498048964196685",
            "extra": "mean: 185.18311051362576 usec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11947429.13204845,
            "unit": "iter/sec",
            "range": "stddev: 3.6661503512827337e-9",
            "extra": "mean: 83.70001520384847 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.40390898325086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541428371302765",
            "extra": "mean: 3.1308320652157033 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1998494.875381611,
            "unit": "iter/sec",
            "range": "stddev: 8.576362187574534e-8",
            "extra": "mean: 500.3765645428792 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11816.421235654458,
            "unit": "iter/sec",
            "range": "stddev: 0.00006065619097222518",
            "extra": "mean: 84.62799184770384 usec\nrounds: 3557"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.48638571934105,
            "unit": "iter/sec",
            "range": "stddev: 0.0005508996819173543",
            "extra": "mean: 17.70338086364053 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1971844.91291347,
            "unit": "iter/sec",
            "range": "stddev: 1.2084238752083298e-7",
            "extra": "mean: 507.1392752295437 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.7787658624519,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037224080463465",
            "extra": "mean: 9.36515787500447 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.20926695923072,
            "unit": "iter/sec",
            "range": "stddev: 0.0006950306779037191",
            "extra": "mean: 8.38860958973934 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.68304857903343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006415992180765537",
            "extra": "mean: 10.561552622223441 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.41696124143142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006189654632037592",
            "extra": "mean: 8.236081596635836 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.46237819811773,
            "unit": "iter/sec",
            "range": "stddev: 0.00038111921236070196",
            "extra": "mean: 21.06931927906761 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145914.0283882965,
            "unit": "iter/sec",
            "range": "stddev: 8.966954395719567e-7",
            "extra": "mean: 6.853350641097154 usec\nrounds: 37594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.68713081130952,
            "unit": "iter/sec",
            "range": "stddev: 0.00010694197549716607",
            "extra": "mean: 6.184784125874618 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.40404742908112,
            "unit": "iter/sec",
            "range": "stddev: 0.00014696351967265363",
            "extra": "mean: 6.045801269940275 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8615378958818393,
            "unit": "iter/sec",
            "range": "stddev: 0.004658006395062849",
            "extra": "mean: 1.1607150477999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.985904598870086,
            "unit": "iter/sec",
            "range": "stddev: 0.032278014568402805",
            "extra": "mean: 28.582939657141132 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 311.2544846313841,
            "unit": "iter/sec",
            "range": "stddev: 0.00021065695600865796",
            "extra": "mean: 3.2128051140670024 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.0777120399531,
            "unit": "iter/sec",
            "range": "stddev: 0.00029659496424725795",
            "extra": "mean: 3.5451223450733367 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.1137485626159,
            "unit": "iter/sec",
            "range": "stddev: 0.00007056920940972504",
            "extra": "mean: 1.3349107554343778 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.06610063745364,
            "unit": "iter/sec",
            "range": "stddev: 0.000034411710833118454",
            "extra": "mean: 3.447490064514209 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.20778786350762,
            "unit": "iter/sec",
            "range": "stddev: 0.00006643782208738454",
            "extra": "mean: 8.99217599065421 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6059202.467843967,
            "unit": "iter/sec",
            "range": "stddev: 1.2845536210127373e-8",
            "extra": "mean: 165.03822166484383 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.792014338803268,
            "unit": "iter/sec",
            "range": "stddev: 0.00013963119684838292",
            "extra": "mean: 63.32314412499329 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.5408929813474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007372827347848274",
            "extra": "mean: 8.365338212389256 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12705.322870334869,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017237807051637896",
            "extra": "mean: 78.70716944430106 usec\nrounds: 5400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.51957417958229,
            "unit": "iter/sec",
            "range": "stddev: 0.0007290479378143307",
            "extra": "mean: 9.300632072163634 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65929.02578293835,
            "unit": "iter/sec",
            "range": "stddev: 9.640453733674913e-7",
            "extra": "mean: 15.167826130062249 usec\nrounds: 13004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.8279196473336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616606832664237",
            "extra": "mean: 3.3022054279690485 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.388360803491869,
            "unit": "iter/sec",
            "range": "stddev: 0.000594635814999432",
            "extra": "mean: 96.26157763637427 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.16707243865771,
            "unit": "iter/sec",
            "range": "stddev: 0.03136452575534787",
            "extra": "mean: 27.64945937208717 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.804509037166,
            "unit": "iter/sec",
            "range": "stddev: 0.00007311168773025421",
            "extra": "mean: 849.7588106780596 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5387.070284743496,
            "unit": "iter/sec",
            "range": "stddev: 0.00004898526508079421",
            "extra": "mean: 185.62965529372423 usec\nrounds: 1993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2703838.393397956,
            "unit": "iter/sec",
            "range": "stddev: 1.5780449764575776e-8",
            "extra": "mean: 369.8445892484361 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.69345382579274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435611036703343",
            "extra": "mean: 10.341961740260565 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.67517999542362,
            "unit": "iter/sec",
            "range": "stddev: 0.00007796170498319965",
            "extra": "mean: 13.2143722692232 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.74205884453355,
            "unit": "iter/sec",
            "range": "stddev: 0.0007397196872162165",
            "extra": "mean: 8.869804314811715 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5484431.298688205,
            "unit": "iter/sec",
            "range": "stddev: 4.19265156885632e-7",
            "extra": "mean: 182.33431062202592 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.4999526645474,
            "unit": "iter/sec",
            "range": "stddev: 0.000012908428468527947",
            "extra": "mean: 566.4117965513218 usec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.13602063934478,
            "unit": "iter/sec",
            "range": "stddev: 0.0008679943302508505",
            "extra": "mean: 9.247612350515466 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8068016924858734,
            "unit": "iter/sec",
            "range": "stddev: 0.0038322055216663126",
            "extra": "mean: 1.2394619511999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.39956168294398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000458903017089454",
            "extra": "mean: 5.091661057850739 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5551.168127738055,
            "unit": "iter/sec",
            "range": "stddev: 0.00004794756912646729",
            "extra": "mean: 180.14226501323282 usec\nrounds: 2298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.2483210103128,
            "unit": "iter/sec",
            "range": "stddev: 0.007057218107998746",
            "extra": "mean: 4.603027518691524 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5636.824759902906,
            "unit": "iter/sec",
            "range": "stddev: 0.00005017631763185486",
            "extra": "mean: 177.40484095113592 usec\nrounds: 2188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.121582357295,
            "unit": "iter/sec",
            "range": "stddev: 0.000053414656003459284",
            "extra": "mean: 7.187957346774411 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.282930619698874,
            "unit": "iter/sec",
            "range": "stddev: 0.0012991820954978595",
            "extra": "mean: 24.223086515152403 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490466.9187996907,
            "unit": "iter/sec",
            "range": "stddev: 4.4069361568076165e-7",
            "extra": "mean: 2.0388734931344175 usec\nrounds: 1992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.34844742245538,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472111722699688",
            "extra": "mean: 9.40305217647071 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 315.3834089136621,
            "unit": "iter/sec",
            "range": "stddev: 0.00021944157448741696",
            "extra": "mean: 3.1707438366669294 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.28591158752661,
            "unit": "iter/sec",
            "range": "stddev: 0.0008491955031408686",
            "extra": "mean: 16.58762343749487 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.30183154378862,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879237182966066",
            "extra": "mean: 8.748766196427075 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.00520643417047,
            "unit": "iter/sec",
            "range": "stddev: 0.000803425123836882",
            "extra": "mean: 9.708247132528095 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.0255439282964,
            "unit": "iter/sec",
            "range": "stddev: 0.000510560656718417",
            "extra": "mean: 3.194627465383676 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.63056419808305,
            "unit": "iter/sec",
            "range": "stddev: 0.00005714075867035368",
            "extra": "mean: 3.4766819819305717 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.36275446329535,
            "unit": "iter/sec",
            "range": "stddev: 0.00021639775253146193",
            "extra": "mean: 3.150968366439658 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5247.093620703437,
            "unit": "iter/sec",
            "range": "stddev: 0.00004792158355768102",
            "extra": "mean: 190.58169575139726 usec\nrounds: 2189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.674023062806856,
            "unit": "iter/sec",
            "range": "stddev: 0.006209498399200974",
            "extra": "mean: 597.3633351999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7024250.932500477,
            "unit": "iter/sec",
            "range": "stddev: 4.7686644160937915e-9",
            "extra": "mean: 142.36393454753303 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.6400429535346,
            "unit": "iter/sec",
            "range": "stddev: 0.00021593294330650236",
            "extra": "mean: 3.2718225999988704 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.433906896782523,
            "unit": "iter/sec",
            "range": "stddev: 0.003406272580999138",
            "extra": "mean: 410.86205940002856 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6866395251136002,
            "unit": "iter/sec",
            "range": "stddev: 0.0025485303847805185",
            "extra": "mean: 1.4563682448000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.25716014466522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905274802704444",
            "extra": "mean: 8.31551317856695 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.03421670718569,
            "unit": "iter/sec",
            "range": "stddev: 0.0008065784251762309",
            "extra": "mean: 8.472119592920738 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.96385914138074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224405213081812",
            "extra": "mean: 9.807396546392217 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 747070.19080272,
            "unit": "iter/sec",
            "range": "stddev: 2.982566826604012e-7",
            "extra": "mean: 1.3385623095542192 usec\nrounds: 25253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.492747571645538,
            "unit": "iter/sec",
            "range": "stddev: 0.0018460797578441612",
            "extra": "mean: 40.82841245453685 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1833545.1516540085,
            "unit": "iter/sec",
            "range": "stddev: 1.3263230028303023e-7",
            "extra": "mean: 545.3915324080881 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8164.526527748106,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789768885726689",
            "extra": "mean: 122.48107671662062 usec\nrounds: 2972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.15869288349039,
            "unit": "iter/sec",
            "range": "stddev: 0.0004971347385059182",
            "extra": "mean: 11.215956264710686 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.02794282591785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006335204121637054",
            "extra": "mean: 8.262554717949419 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.00545793788557,
            "unit": "iter/sec",
            "range": "stddev: 0.00015311005875193846",
            "extra": "mean: 8.332954327107327 msec\nrounds: 107"
          }
        ]
      }
    ]
  }
}