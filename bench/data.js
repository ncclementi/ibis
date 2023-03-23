window.BENCHMARK_DATA = {
  "lastUpdate": 1679613475673,
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
          "id": "ce3d6a450e780e5efcc65ca056ec3e2ec41a2001",
          "message": "feat(snowflake): native pyarrow support",
          "timestamp": "2023-03-23T19:12:18-04:00",
          "tree_id": "858b211129f5b6aeb12bb5bca656817a53628747",
          "url": "https://github.com/ibis-project/ibis/commit/ce3d6a450e780e5efcc65ca056ec3e2ec41a2001"
        },
        "date": 1679613390841,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5286.483266574112,
            "unit": "iter/sec",
            "range": "stddev: 0.00002503800997605204",
            "extra": "mean: 189.16166940750512 usec\nrounds: 608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5555.045198385894,
            "unit": "iter/sec",
            "range": "stddev: 0.00004673645137511984",
            "extra": "mean: 180.01653709146524 usec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1860010.097554126,
            "unit": "iter/sec",
            "range": "stddev: 8.698019685065118e-8",
            "extra": "mean: 537.6314899123284 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.07244196882343,
            "unit": "iter/sec",
            "range": "stddev: 0.003786147560014361",
            "extra": "mean: 5.711921241025919 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.89022321699997,
            "unit": "iter/sec",
            "range": "stddev: 0.00016651790531693321",
            "extra": "mean: 6.761772199996585 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138593.48786284018,
            "unit": "iter/sec",
            "range": "stddev: 8.112918819023686e-7",
            "extra": "mean: 7.215346228891041 usec\nrounds: 34844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.292975709519391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003688353607793985",
            "extra": "mean: 97.15363449999757 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.309109867627892,
            "unit": "iter/sec",
            "range": "stddev: 0.0005422739163094054",
            "extra": "mean: 38.00964779999845 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.78028155229609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575744363414654",
            "extra": "mean: 10.022020227271934 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.478532096682787,
            "unit": "iter/sec",
            "range": "stddev: 0.0018280365997540213",
            "extra": "mean: 182.5306455000041 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.0600441192852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003557858797780833",
            "extra": "mean: 2.84851556521828 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.22816939585958,
            "unit": "iter/sec",
            "range": "stddev: 0.00010299410430333273",
            "extra": "mean: 9.155147481927003 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.6143219751049,
            "unit": "iter/sec",
            "range": "stddev: 0.00004442367732845284",
            "extra": "mean: 1.4585459608241829 msec\nrounds: 485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5477.908006818851,
            "unit": "iter/sec",
            "range": "stddev: 0.00004216032963615209",
            "extra": "mean: 182.55144094336904 usec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.14233427590254,
            "unit": "iter/sec",
            "range": "stddev: 0.00007294223450651294",
            "extra": "mean: 8.997471634144148 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1890559.5152840326,
            "unit": "iter/sec",
            "range": "stddev: 9.152024336416406e-8",
            "extra": "mean: 528.9439406247747 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.10245919107941,
            "unit": "iter/sec",
            "range": "stddev: 0.0007166643865446895",
            "extra": "mean: 22.171740032254938 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.59415843387887,
            "unit": "iter/sec",
            "range": "stddev: 0.000036139080231272764",
            "extra": "mean: 5.274424108107481 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.22440331683427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550906834130169",
            "extra": "mean: 9.78239997058824 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.13676193642516,
            "unit": "iter/sec",
            "range": "stddev: 0.01756181710410774",
            "extra": "mean: 31.11701178787891 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5809.530159531864,
            "unit": "iter/sec",
            "range": "stddev: 0.000051632960952939444",
            "extra": "mean: 172.13095939596272 usec\nrounds: 2118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.98317944332041,
            "unit": "iter/sec",
            "range": "stddev: 0.0005916973785349382",
            "extra": "mean: 8.33450159130344 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9234646317181326,
            "unit": "iter/sec",
            "range": "stddev: 0.005829025493800194",
            "extra": "mean: 1.0828785052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.81747593519516,
            "unit": "iter/sec",
            "range": "stddev: 0.00006310074522988014",
            "extra": "mean: 13.546927571431818 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.39543015796903,
            "unit": "iter/sec",
            "range": "stddev: 0.0005460555693313129",
            "extra": "mean: 9.398899919999053 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.65381753482507,
            "unit": "iter/sec",
            "range": "stddev: 0.00015858228803524642",
            "extra": "mean: 6.110459352939952 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.14506304634136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007545084784915838",
            "extra": "mean: 10.62190589333151 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9249503508156739,
            "unit": "iter/sec",
            "range": "stddev: 0.0029674309452987196",
            "extra": "mean: 1.0811391110000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.4882147545143,
            "unit": "iter/sec",
            "range": "stddev: 0.00018179037149554996",
            "extra": "mean: 3.2207341614902973 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.86187614079286,
            "unit": "iter/sec",
            "range": "stddev: 0.0006569461083617043",
            "extra": "mean: 8.413126500001496 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.7712847459134,
            "unit": "iter/sec",
            "range": "stddev: 0.000015219654052251836",
            "extra": "mean: 862.9830693632287 usec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.24629293822638,
            "unit": "iter/sec",
            "range": "stddev: 0.011914125488435604",
            "extra": "mean: 10.610496909999938 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.443553896412347,
            "unit": "iter/sec",
            "range": "stddev: 0.00009319077261893056",
            "extra": "mean: 64.75193512500432 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.98599486827796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167774237837612",
            "extra": "mean: 9.5250800000006 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.01886333693093,
            "unit": "iter/sec",
            "range": "stddev: 0.00007121662809654882",
            "extra": "mean: 6.249263237762349 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11940.033880619494,
            "unit": "iter/sec",
            "range": "stddev: 0.000002534171247114021",
            "extra": "mean: 83.75185615035426 usec\nrounds: 2447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.77943049177225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001074790598804353",
            "extra": "mean: 10.332774174415249 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.45325680484664,
            "unit": "iter/sec",
            "range": "stddev: 0.00044508382252502295",
            "extra": "mean: 17.405453678574442 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.8294903111223,
            "unit": "iter/sec",
            "range": "stddev: 0.000009775427292703113",
            "extra": "mean: 570.1808559637141 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.2558335145106,
            "unit": "iter/sec",
            "range": "stddev: 0.0007249590826979908",
            "extra": "mean: 26.841434096770772 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.664011029719357,
            "unit": "iter/sec",
            "range": "stddev: 0.05483311708252951",
            "extra": "mean: 1.5059990801999903 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488798.2131626568,
            "unit": "iter/sec",
            "range": "stddev: 1.7115857151124453e-7",
            "extra": "mean: 2.0458339925789195 usec\nrounds: 2024"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.26769654122201,
            "unit": "iter/sec",
            "range": "stddev: 0.0001868906268335298",
            "extra": "mean: 13.837441178571298 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.70683512329929,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757286263254153",
            "extra": "mean: 8.353741864196724 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.3897518901769,
            "unit": "iter/sec",
            "range": "stddev: 0.00020724529565713297",
            "extra": "mean: 3.362590652986893 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.5850241006165,
            "unit": "iter/sec",
            "range": "stddev: 0.000026351214158792366",
            "extra": "mean: 1.8498477675435472 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.28569021529702,
            "unit": "iter/sec",
            "range": "stddev: 0.0006300026283498089",
            "extra": "mean: 8.827240211005657 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.7044078724021,
            "unit": "iter/sec",
            "range": "stddev: 0.00017707833516849002",
            "extra": "mean: 3.1475798736844234 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7362473.588068442,
            "unit": "iter/sec",
            "range": "stddev: 4.636785314390039e-9",
            "extra": "mean: 135.82391679080428 nsec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7995.954722585795,
            "unit": "iter/sec",
            "range": "stddev: 0.00002079863001091634",
            "extra": "mean: 125.06323943723034 usec\nrounds: 3621"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11622.069238388569,
            "unit": "iter/sec",
            "range": "stddev: 0.000011324823052632369",
            "extra": "mean: 86.0431976000388 usec\nrounds: 6083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1667592.33076478,
            "unit": "iter/sec",
            "range": "stddev: 8.731450740093053e-8",
            "extra": "mean: 599.6669459024117 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7444672674143926,
            "unit": "iter/sec",
            "range": "stddev: 0.002319064710665999",
            "extra": "mean: 573.2409077999932 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.4620979592498,
            "unit": "iter/sec",
            "range": "stddev: 0.00025713900359245644",
            "extra": "mean: 3.578302772728116 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 746862.1684916711,
            "unit": "iter/sec",
            "range": "stddev: 1.7711379375048104e-7",
            "extra": "mean: 1.3389351371479352 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68516.6586421508,
            "unit": "iter/sec",
            "range": "stddev: 5.572835293780539e-7",
            "extra": "mean: 14.59499076309027 usec\nrounds: 13316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.4878757494579,
            "unit": "iter/sec",
            "range": "stddev: 0.00008099279120357046",
            "extra": "mean: 3.4543761026643707 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.30057985766487,
            "unit": "iter/sec",
            "range": "stddev: 0.000027636442667909724",
            "extra": "mean: 7.390951325204903 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13463.03215844704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018963263021594803",
            "extra": "mean: 74.27747243198667 usec\nrounds: 7273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.1514780509015,
            "unit": "iter/sec",
            "range": "stddev: 0.000215365249514696",
            "extra": "mean: 3.2138687119988845 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.92047444131677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006690535104720004",
            "extra": "mean: 8.480291524756804 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5378.182360176193,
            "unit": "iter/sec",
            "range": "stddev: 0.000049836254500523034",
            "extra": "mean: 185.93642480491113 usec\nrounds: 3072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.61526382505787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008715449753153077",
            "extra": "mean: 3.0805698666681347 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.23309872280927,
            "unit": "iter/sec",
            "range": "stddev: 0.00027174582365365184",
            "extra": "mean: 14.87362651724311 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.94850595666355,
            "unit": "iter/sec",
            "range": "stddev: 0.00021976407966517217",
            "extra": "mean: 3.3339055875960244 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.0133658990626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967620417051516",
            "extra": "mean: 20.402597978261383 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1791141047694405,
            "unit": "iter/sec",
            "range": "stddev: 0.14835216549577354",
            "extra": "mean: 5.583033236200026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5565.62283900992,
            "unit": "iter/sec",
            "range": "stddev: 0.00004463085221902116",
            "extra": "mean: 179.67441002126762 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8432516235125141,
            "unit": "iter/sec",
            "range": "stddev: 0.0033091018332937834",
            "extra": "mean: 1.1858856504000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.27873480363283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006084615830325115",
            "extra": "mean: 8.314021606833501 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.8166811868633,
            "unit": "iter/sec",
            "range": "stddev: 0.00395192919000847",
            "extra": "mean: 3.9711427983515484 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5831044.823903945,
            "unit": "iter/sec",
            "range": "stddev: 1.0541468703347281e-8",
            "extra": "mean: 171.49585197843953 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.60957047486595,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552560423038091",
            "extra": "mean: 8.575625447617442 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5853.0340213541685,
            "unit": "iter/sec",
            "range": "stddev: 0.000041860399677425686",
            "extra": "mean: 170.85156114787765 usec\nrounds: 2126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5353.867500585169,
            "unit": "iter/sec",
            "range": "stddev: 0.000045086721685218105",
            "extra": "mean: 186.7808644667993 usec\nrounds: 3121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5847.270671773994,
            "unit": "iter/sec",
            "range": "stddev: 0.00004375973161065151",
            "extra": "mean: 171.0199606163625 usec\nrounds: 3504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12140055.421792226,
            "unit": "iter/sec",
            "range": "stddev: 3.380561378096597e-9",
            "extra": "mean: 82.37194685324319 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6382438.639939319,
            "unit": "iter/sec",
            "range": "stddev: 1.2771389910434479e-8",
            "extra": "mean: 156.67992383679731 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.0346637587631,
            "unit": "iter/sec",
            "range": "stddev: 0.00024029637841099528",
            "extra": "mean: 3.267603701220809 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.93788632937932,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278011537998108",
            "extra": "mean: 10.759874573173741 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.20890233662172,
            "unit": "iter/sec",
            "range": "stddev: 0.0006957741249412628",
            "extra": "mean: 8.38863524786264 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5895650668542722,
            "unit": "iter/sec",
            "range": "stddev: 0.002777811057134675",
            "extra": "mean: 386.1652339999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.8494850560231,
            "unit": "iter/sec",
            "range": "stddev: 0.00009085253957656593",
            "extra": "mean: 1.3461677232294016 msec\nrounds: 607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.33061093781734,
            "unit": "iter/sec",
            "range": "stddev: 0.014728250233576014",
            "extra": "mean: 10.83064424509742 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2555222.0758651136,
            "unit": "iter/sec",
            "range": "stddev: 1.5647586516437082e-8",
            "extra": "mean: 391.3554165976184 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.51615191305012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006403160754271308",
            "extra": "mean: 8.88761287155267 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.75905085398813,
            "unit": "iter/sec",
            "range": "stddev: 0.00020010732113081274",
            "extra": "mean: 3.2705491373255833 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.22640251859892,
            "unit": "iter/sec",
            "range": "stddev: 0.0006412838724965174",
            "extra": "mean: 9.878845588889362 msec\nrounds: 90"
          }
        ]
      }
    ]
  }
}