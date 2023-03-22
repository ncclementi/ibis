window.BENCHMARK_DATA = {
  "lastUpdate": 1679506658593,
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
          "id": "4e7b0dcc7f396878ceb497a1a0ef3edd727ea155",
          "message": "test(snowflake): catch the right error when accessing tables in view test",
          "timestamp": "2023-03-22T13:32:25-04:00",
          "tree_id": "be9036b3ab389341b74164231dff1f6329c0f599",
          "url": "https://github.com/ibis-project/ibis/commit/4e7b0dcc7f396878ceb497a1a0ef3edd727ea155"
        },
        "date": 1679506573122,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.1999286280968,
            "unit": "iter/sec",
            "range": "stddev: 0.00006663778605757048",
            "extra": "mean: 8.992811527284838 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6133571.79387004,
            "unit": "iter/sec",
            "range": "stddev: 1.2142745645685068e-8",
            "extra": "mean: 163.0371394691007 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.31461940362553,
            "unit": "iter/sec",
            "range": "stddev: 0.006210049442272625",
            "extra": "mean: 6.276887857143153 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5514.0518719774045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004923907542987119",
            "extra": "mean: 181.35484090783285 usec\nrounds: 660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.04712649285173,
            "unit": "iter/sec",
            "range": "stddev: 0.01098355934904508",
            "extra": "mean: 9.799394009100771 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.12861008283033,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078260560964895",
            "extra": "mean: 3.277306574852288 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1635881.0178380634,
            "unit": "iter/sec",
            "range": "stddev: 9.763572018495363e-8",
            "extra": "mean: 611.2914014501943 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.50453272224988,
            "unit": "iter/sec",
            "range": "stddev: 0.0006904983281635403",
            "extra": "mean: 8.367883436891725 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7335977.975227297,
            "unit": "iter/sec",
            "range": "stddev: 5.0251917320757044e-9",
            "extra": "mean: 136.3144768668729 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 664.133435485363,
            "unit": "iter/sec",
            "range": "stddev: 0.00010737158835019884",
            "extra": "mean: 1.5057215110231252 msec\nrounds: 499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.1956142841424,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312922777424452",
            "extra": "mean: 1.8649910095498783 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70735.63896349834,
            "unit": "iter/sec",
            "range": "stddev: 5.607511189950098e-7",
            "extra": "mean: 14.137145216374298 usec\nrounds: 13263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138468.81037873123,
            "unit": "iter/sec",
            "range": "stddev: 3.9490838051198513e-7",
            "extra": "mean: 7.221842935350297 usec\nrounds: 34247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.27611458507364,
            "unit": "iter/sec",
            "range": "stddev: 0.0007044389676322304",
            "extra": "mean: 8.986654537038786 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.99402534143987,
            "unit": "iter/sec",
            "range": "stddev: 0.00007445463876888738",
            "extra": "mean: 10.52697784313982 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.64403120599994,
            "unit": "iter/sec",
            "range": "stddev: 0.000028886095750739078",
            "extra": "mean: 5.16411476135917 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5526.929057209775,
            "unit": "iter/sec",
            "range": "stddev: 0.00004591399737878127",
            "extra": "mean: 180.9323024864086 usec\nrounds: 2172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1837190.3099705381,
            "unit": "iter/sec",
            "range": "stddev: 1.2843123483368458e-7",
            "extra": "mean: 544.309424327432 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.322769881816834,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318778170937894",
            "extra": "mean: 96.87322409089657 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8575810648954935,
            "unit": "iter/sec",
            "range": "stddev: 0.0013775885143797457",
            "extra": "mean: 1.1660705219999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.84246057380489,
            "unit": "iter/sec",
            "range": "stddev: 0.0006374773059810825",
            "extra": "mean: 10.888210025649268 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 115.50799569449362,
            "unit": "iter/sec",
            "range": "stddev: 0.012621669778310671",
            "extra": "mean: 8.65740933333216 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.80378858289427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005940614588649124",
            "extra": "mean: 8.277886080648958 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.2777957876998,
            "unit": "iter/sec",
            "range": "stddev: 0.000032178512737460016",
            "extra": "mean: 3.0742953037368514 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 738506.3052432234,
            "unit": "iter/sec",
            "range": "stddev: 1.723421778664302e-7",
            "extra": "mean: 1.354084579779796 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.8975794026784,
            "unit": "iter/sec",
            "range": "stddev: 0.00007855988866406679",
            "extra": "mean: 1.340666637905983 msec\nrounds: 591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.33723013270172,
            "unit": "iter/sec",
            "range": "stddev: 0.0001371293177083306",
            "extra": "mean: 8.52244423077873 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5400.441420938224,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618493755501734",
            "extra": "mean: 185.17004853026793 usec\nrounds: 2617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.663672138599435,
            "unit": "iter/sec",
            "range": "stddev: 0.05371853787108885",
            "extra": "mean: 1.5067680889999793 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6041306862611804,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699658414939207",
            "extra": "mean: 384.00530559997605 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.87639371522127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501828710595201",
            "extra": "mean: 9.535034191920966 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7722157851839992,
            "unit": "iter/sec",
            "range": "stddev: 0.001075776935982129",
            "extra": "mean: 564.2653723999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.93165853736364,
            "unit": "iter/sec",
            "range": "stddev: 0.0033258324694266724",
            "extra": "mean: 1.0733546250000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.25259311131292,
            "unit": "iter/sec",
            "range": "stddev: 0.0001861632099093508",
            "extra": "mean: 13.467543126755029 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5723188.686047987,
            "unit": "iter/sec",
            "range": "stddev: 1.1572192176656314e-8",
            "extra": "mean: 174.727770628265 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5795.806213220036,
            "unit": "iter/sec",
            "range": "stddev: 0.000057597680000542024",
            "extra": "mean: 172.53854998102494 usec\nrounds: 2451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.27204871587092,
            "unit": "iter/sec",
            "range": "stddev: 0.0008127982784085793",
            "extra": "mean: 26.82975673333961 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.06369205345536,
            "unit": "iter/sec",
            "range": "stddev: 0.00007543976172444419",
            "extra": "mean: 6.619724345451191 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 296.1934285716399,
            "unit": "iter/sec",
            "range": "stddev: 0.0002776431881118882",
            "extra": "mean: 3.3761721346161853 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.77218781153042,
            "unit": "iter/sec",
            "range": "stddev: 0.00019725484909377194",
            "extra": "mean: 14.332358370375509 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.84869291699405,
            "unit": "iter/sec",
            "range": "stddev: 0.00021104900998033822",
            "extra": "mean: 10.543107862067648 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 268.4968725736749,
            "unit": "iter/sec",
            "range": "stddev: 0.00852493191421315",
            "extra": "mean: 3.7244381672475617 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.60816959841657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005667933560327273",
            "extra": "mean: 15.97235642591428 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13531.63245487633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017884260609033807",
            "extra": "mean: 73.90091353239755 usec\nrounds: 5956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.4085256559407,
            "unit": "iter/sec",
            "range": "stddev: 0.00028641131640749263",
            "extra": "mean: 3.5662253765671625 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.13647868728775,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160334054495345",
            "extra": "mean: 9.79082119192409 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481080.146933864,
            "unit": "iter/sec",
            "range": "stddev: 1.1621423931229319e-7",
            "extra": "mean: 2.078655721657693 usec\nrounds: 2071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.31077688447257,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783047153449336",
            "extra": "mean: 8.381472538463898 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.95697745148148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182541546486055",
            "extra": "mean: 9.527713395350686 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.56602251952518,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737987408361957",
            "extra": "mean: 10.04358690540136 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5342.235923146069,
            "unit": "iter/sec",
            "range": "stddev: 0.000020688928014084506",
            "extra": "mean: 187.18753989642133 usec\nrounds: 2519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 308.92446541832686,
            "unit": "iter/sec",
            "range": "stddev: 0.00022062668516014382",
            "extra": "mean: 3.237037243540619 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.90361406381766,
            "unit": "iter/sec",
            "range": "stddev: 0.00042948218099686416",
            "extra": "mean: 38.6046517499968 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 257.26365264304997,
            "unit": "iter/sec",
            "range": "stddev: 0.009422879043582239",
            "extra": "mean: 3.8870629011377957 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11626.519446536777,
            "unit": "iter/sec",
            "range": "stddev: 0.000011802297580049306",
            "extra": "mean: 86.01026339812066 usec\nrounds: 4385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.37616029532327,
            "unit": "iter/sec",
            "range": "stddev: 0.004129885658339764",
            "extra": "mean: 4.1429112086980835 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 349.4274364879467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004075609205135062",
            "extra": "mean: 2.861824503682024 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1758.053595056072,
            "unit": "iter/sec",
            "range": "stddev: 0.00001197030530984216",
            "extra": "mean: 568.8108728949788 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.652503420357121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006676061185283601",
            "extra": "mean: 63.88754393750418 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.95167238943463,
            "unit": "iter/sec",
            "range": "stddev: 0.0006845461041590723",
            "extra": "mean: 8.406775456894044 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2513605.0007599816,
            "unit": "iter/sec",
            "range": "stddev: 1.9693998355159846e-8",
            "extra": "mean: 397.83498190736947 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18095376080063622,
            "unit": "iter/sec",
            "range": "stddev: 0.12307717772631968",
            "extra": "mean: 5.526273648999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1839424.4364997058,
            "unit": "iter/sec",
            "range": "stddev: 9.34578991280587e-8",
            "extra": "mean: 543.648317461156 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.20213713165485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905650863316961",
            "extra": "mean: 9.979827063829061 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.788065193414,
            "unit": "iter/sec",
            "range": "stddev: 0.00008276749694893516",
            "extra": "mean: 6.297702530614855 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5827.729918494662,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191051511919051",
            "extra": "mean: 171.59340154498886 usec\nrounds: 2199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.525136669819126,
            "unit": "iter/sec",
            "range": "stddev: 0.00024300766181756863",
            "extra": "mean: 21.0414965652282 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.57736783092547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006752308054329132",
            "extra": "mean: 8.362786521726537 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.287666996553675,
            "unit": "iter/sec",
            "range": "stddev: 0.0002937171638177476",
            "extra": "mean: 17.76588111319709 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.51019590331026,
            "unit": "iter/sec",
            "range": "stddev: 0.00023943744525889026",
            "extra": "mean: 3.3954681838190317 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11989784.069187706,
            "unit": "iter/sec",
            "range": "stddev: 3.793048224630936e-9",
            "extra": "mean: 83.4043377452801 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9175945782042193,
            "unit": "iter/sec",
            "range": "stddev: 0.006046049562622285",
            "extra": "mean: 1.0898059161999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5760.55941613546,
            "unit": "iter/sec",
            "range": "stddev: 0.000046841301566018855",
            "extra": "mean: 173.59425148866214 usec\nrounds: 2183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.1523466288607,
            "unit": "iter/sec",
            "range": "stddev: 0.00021599528272559895",
            "extra": "mean: 3.2557133649651817 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.483569990422225,
            "unit": "iter/sec",
            "range": "stddev: 0.027638207440640966",
            "extra": "mean: 32.80455669444867 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1164.6959979935186,
            "unit": "iter/sec",
            "range": "stddev: 0.00002987613836154807",
            "extra": "mean: 858.5931450977346 usec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.1690662814824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651671155371104",
            "extra": "mean: 3.3878888888931504 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.55779768950303,
            "unit": "iter/sec",
            "range": "stddev: 0.00022414622884222267",
            "extra": "mean: 179.92738416669832 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.21358739266788,
            "unit": "iter/sec",
            "range": "stddev: 0.00006351475614395046",
            "extra": "mean: 6.089630071894098 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.09186322411911,
            "unit": "iter/sec",
            "range": "stddev: 0.0006681209894729509",
            "extra": "mean: 9.990822108694948 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.27563550753837,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074531655929547",
            "extra": "mean: 8.383941915252246 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5256.51162706067,
            "unit": "iter/sec",
            "range": "stddev: 0.00005440733849666055",
            "extra": "mean: 190.24023362793906 usec\nrounds: 3176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.44426350952281,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009782943365386",
            "extra": "mean: 24.128791666673628 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.88763485218018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512036058626451",
            "extra": "mean: 9.814733666659473 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11849.595107163375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018110511475989724",
            "extra": "mean: 84.39106914256294 usec\nrounds: 4469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.14317690564783,
            "unit": "iter/sec",
            "range": "stddev: 0.01716873144726739",
            "extra": "mean: 11.345177642853082 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5617.256175508783,
            "unit": "iter/sec",
            "range": "stddev: 0.000051150076611837835",
            "extra": "mean: 178.02285827019898 usec\nrounds: 3422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8013.874104239984,
            "unit": "iter/sec",
            "range": "stddev: 0.00001421636877645933",
            "extra": "mean: 124.7835924289002 usec\nrounds: 4333"
          }
        ]
      }
    ]
  }
}