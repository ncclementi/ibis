window.BENCHMARK_DATA = {
  "lastUpdate": 1679613715260,
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
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2cb9398a4c3c00ec704b9c8c8cfb17ee4a157ebf",
          "message": "chore(deps): update peter-evans/enable-pull-request-automerge action to v3",
          "timestamp": "2023-03-23T19:16:47-04:00",
          "tree_id": "a886b5b7370e260a0bda98d8085893e4ec0f1b16",
          "url": "https://github.com/ibis-project/ibis/commit/2cb9398a4c3c00ec704b9c8c8cfb17ee4a157ebf"
        },
        "date": 1679613631373,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 743.7156151786514,
            "unit": "iter/sec",
            "range": "stddev: 0.00006926193370122414",
            "extra": "mean: 1.3445999782588745 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.54140371760516,
            "unit": "iter/sec",
            "range": "stddev: 0.00010050058353410685",
            "extra": "mean: 21.034296882354948 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5551.5347023021595,
            "unit": "iter/sec",
            "range": "stddev: 0.000041122251037814204",
            "extra": "mean: 180.13037000116583 usec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68279.10283190812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010842619156058712",
            "extra": "mean: 14.645769474473543 usec\nrounds: 13890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.8335754115345,
            "unit": "iter/sec",
            "range": "stddev: 0.00018131946637396442",
            "extra": "mean: 3.2275391673473615 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.35980409278756,
            "unit": "iter/sec",
            "range": "stddev: 0.00011153206519189644",
            "extra": "mean: 3.432182428573902 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.69936685671455,
            "unit": "iter/sec",
            "range": "stddev: 0.0005436987520194151",
            "extra": "mean: 8.643089648350704 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12008.84333037445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020840836376380847",
            "extra": "mean: 83.27196654074585 usec\nrounds: 5559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.05646737680166,
            "unit": "iter/sec",
            "range": "stddev: 0.00017635486351552413",
            "extra": "mean: 3.1540123066203316 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.490015906546297,
            "unit": "iter/sec",
            "range": "stddev: 0.00022102811519645333",
            "extra": "mean: 95.3287400999983 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.50795260700636,
            "unit": "iter/sec",
            "range": "stddev: 0.000331798545953205",
            "extra": "mean: 64.48304462500154 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7666.436554677702,
            "unit": "iter/sec",
            "range": "stddev: 0.00001659709420893937",
            "extra": "mean: 130.4386976749774 usec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 672.5443455590123,
            "unit": "iter/sec",
            "range": "stddev: 0.000033419484856097084",
            "extra": "mean: 1.4868907999944743 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12189154.466890732,
            "unit": "iter/sec",
            "range": "stddev: 3.670679147463296e-9",
            "extra": "mean: 82.0401450088026 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 711427.9817650187,
            "unit": "iter/sec",
            "range": "stddev: 0.000006010472047531596",
            "extra": "mean: 1.4056236550030656 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5683.565651568299,
            "unit": "iter/sec",
            "range": "stddev: 0.00009991651829371106",
            "extra": "mean: 175.94588701972052 usec\nrounds: 416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.11333687198562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000625137954942913",
            "extra": "mean: 8.999819716980566 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 332.9176805651664,
            "unit": "iter/sec",
            "range": "stddev: 0.00003552477970224724",
            "extra": "mean: 3.0037455454525093 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.8892554575844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002506722954564093",
            "extra": "mean: 3.4978579324341332 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.16966283049128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005230806479357051",
            "extra": "mean: 8.252890836206559 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.2836937654641,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949070758834763",
            "extra": "mean: 3.1818386376299097 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.02333961592387,
            "unit": "iter/sec",
            "range": "stddev: 0.00017142947289906728",
            "extra": "mean: 13.884388107142241 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.504423194850946,
            "unit": "iter/sec",
            "range": "stddev: 0.00039636005878211086",
            "extra": "mean: 181.6720780000054 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2607552.987061841,
            "unit": "iter/sec",
            "range": "stddev: 1.690455308446584e-8",
            "extra": "mean: 383.50131520309407 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.563912147297046,
            "unit": "iter/sec",
            "range": "stddev: 0.017106718130421004",
            "extra": "mean: 29.793904703702175 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.95878256106549,
            "unit": "iter/sec",
            "range": "stddev: 0.0002998771968678072",
            "extra": "mean: 14.714801565219823 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.40940627816104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005731122091019745",
            "extra": "mean: 8.236594104651994 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.0342942361397,
            "unit": "iter/sec",
            "range": "stddev: 0.013286580611393886",
            "extra": "mean: 6.991330333332995 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11644.848054306585,
            "unit": "iter/sec",
            "range": "stddev: 0.000011098973644130775",
            "extra": "mean: 85.87488607291638 usec\nrounds: 4617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7389106.051944201,
            "unit": "iter/sec",
            "range": "stddev: 3.800165554717513e-9",
            "extra": "mean: 135.33436832141962 nsec\nrounds: 54648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.97861313300145,
            "unit": "iter/sec",
            "range": "stddev: 0.0005524093055684672",
            "extra": "mean: 10.640718847220795 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.2780546908039,
            "unit": "iter/sec",
            "range": "stddev: 0.000006789487334931589",
            "extra": "mean: 569.0619064698624 usec\nrounds: 1422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141087.03163458814,
            "unit": "iter/sec",
            "range": "stddev: 3.053771392026024e-7",
            "extra": "mean: 7.087823653345935 usec\nrounds: 38464"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5013.218185306371,
            "unit": "iter/sec",
            "range": "stddev: 0.0001185519278030104",
            "extra": "mean: 199.47266666569138 usec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.22312270832364,
            "unit": "iter/sec",
            "range": "stddev: 0.0004600597704226475",
            "extra": "mean: 9.687751869565972 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5665.665295564274,
            "unit": "iter/sec",
            "range": "stddev: 0.00004269361916657007",
            "extra": "mean: 176.50177831417497 usec\nrounds: 3938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.40446520198155,
            "unit": "iter/sec",
            "range": "stddev: 0.017810062752512353",
            "extra": "mean: 30.85994457143053 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.6915919203072,
            "unit": "iter/sec",
            "range": "stddev: 0.000056997910014208306",
            "extra": "mean: 6.109049269230929 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6519526.153496166,
            "unit": "iter/sec",
            "range": "stddev: 8.912092451282267e-9",
            "extra": "mean: 153.3853805408449 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 186.49158223579286,
            "unit": "iter/sec",
            "range": "stddev: 0.003381354932400802",
            "extra": "mean: 5.3621723190467545 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495101.8445416352,
            "unit": "iter/sec",
            "range": "stddev: 4.939026103593097e-7",
            "extra": "mean: 2.019786456109448 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.32902662168408,
            "unit": "iter/sec",
            "range": "stddev: 0.00006805516559285757",
            "extra": "mean: 10.067550584268933 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.5694136624798,
            "unit": "iter/sec",
            "range": "stddev: 0.000058413648230473596",
            "extra": "mean: 3.1001079384617323 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.21896482263183,
            "unit": "iter/sec",
            "range": "stddev: 0.0005350375432783082",
            "extra": "mean: 9.688142113402979 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.94402424754843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006244731656605994",
            "extra": "mean: 10.422743968085664 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.68772205269467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167676431393789",
            "extra": "mean: 9.461837009803386 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.26328763094148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005245578723563185",
            "extra": "mean: 9.322854278349913 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9281483658438994,
            "unit": "iter/sec",
            "range": "stddev: 0.0052389300799383",
            "extra": "mean: 1.0774139532000049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7858056328613303,
            "unit": "iter/sec",
            "range": "stddev: 0.0016255755049844635",
            "extra": "mean: 559.9713550000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.4427733224026,
            "unit": "iter/sec",
            "range": "stddev: 0.000552694878616272",
            "extra": "mean: 9.307280230000288 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.3900542681489,
            "unit": "iter/sec",
            "range": "stddev: 0.0002075033192484705",
            "extra": "mean: 3.3179595206890697 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5827.245139213046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004753491373208241",
            "extra": "mean: 171.6076767168658 usec\nrounds: 3582"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.97257811946667,
            "unit": "iter/sec",
            "range": "stddev: 0.00008071396086530992",
            "extra": "mean: 16.957033792455192 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.3735863351613,
            "unit": "iter/sec",
            "range": "stddev: 0.0001855234674349229",
            "extra": "mean: 3.3403080486882297 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.1644457110924,
            "unit": "iter/sec",
            "range": "stddev: 0.0001442155669240671",
            "extra": "mean: 20.339901844441655 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 312.87803983044336,
            "unit": "iter/sec",
            "range": "stddev: 0.00019535020091980177",
            "extra": "mean: 3.1961335494876075 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.499785295420118,
            "unit": "iter/sec",
            "range": "stddev: 0.0008335675657616009",
            "extra": "mean: 36.363920272735456 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13372.229761045752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016631212450287814",
            "extra": "mean: 74.78184400578208 usec\nrounds: 6481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5484.761138972428,
            "unit": "iter/sec",
            "range": "stddev: 0.00005560029882387698",
            "extra": "mean: 182.32334547705582 usec\nrounds: 2498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5372.754330816531,
            "unit": "iter/sec",
            "range": "stddev: 0.00001806092653761112",
            "extra": "mean: 186.1242741482326 usec\nrounds: 2495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5359.580000129781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000425694100927898",
            "extra": "mean: 186.5817843890352 usec\nrounds: 2588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.49736906608926,
            "unit": "iter/sec",
            "range": "stddev: 0.0005722597800528118",
            "extra": "mean: 8.298936381353931 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 266.1229054218805,
            "unit": "iter/sec",
            "range": "stddev: 0.003782914549033777",
            "extra": "mean: 3.757662266668536 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.51107424053974,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222895063379655",
            "extra": "mean: 8.29799258119634 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.4613304605375,
            "unit": "iter/sec",
            "range": "stddev: 0.000019765256525504822",
            "extra": "mean: 1.836677729076078 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.86085496248876,
            "unit": "iter/sec",
            "range": "stddev: 0.00018519412983578832",
            "extra": "mean: 3.216873350363361 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8564642556022745,
            "unit": "iter/sec",
            "range": "stddev: 0.0018329296382604528",
            "extra": "mean: 1.1675910505999922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5916756686836466,
            "unit": "iter/sec",
            "range": "stddev: 0.0012106585147051996",
            "extra": "mean: 385.85074979999945 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.12846789653481,
            "unit": "iter/sec",
            "range": "stddev: 0.00013777205009975698",
            "extra": "mean: 13.490093999996802 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.03479191591379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005590310271106302",
            "extra": "mean: 9.800578618556832 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1803283167992318,
            "unit": "iter/sec",
            "range": "stddev: 0.14139613895867803",
            "extra": "mean: 5.545440770199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.09964142501218,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342689678606225",
            "extra": "mean: 7.347557932773667 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2546403.4441929115,
            "unit": "iter/sec",
            "range": "stddev: 1.529459201787977e-8",
            "extra": "mean: 392.7107474977064 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5687534.916926225,
            "unit": "iter/sec",
            "range": "stddev: 8.691075517754409e-9",
            "extra": "mean: 175.82309640404085 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2551225.513513785,
            "unit": "iter/sec",
            "range": "stddev: 1.640513307528736e-8",
            "extra": "mean: 391.96848522512937 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.9484302234644,
            "unit": "iter/sec",
            "range": "stddev: 0.000654231316819961",
            "extra": "mean: 8.85359803603765 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.61348864100643,
            "unit": "iter/sec",
            "range": "stddev: 0.00011601006603190128",
            "extra": "mean: 6.304634041959212 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.33491480842297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806320343884203",
            "extra": "mean: 8.241650818965926 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9179360158674069,
            "unit": "iter/sec",
            "range": "stddev: 0.0051976734773263875",
            "extra": "mean: 1.0894005493999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1793885.4468782644,
            "unit": "iter/sec",
            "range": "stddev: 9.375779076061537e-8",
            "extra": "mean: 557.449195956302 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.27881586151993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693520550449326",
            "extra": "mean: 9.409212851063266 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.3259121408125,
            "unit": "iter/sec",
            "range": "stddev: 0.000012015628727198697",
            "extra": "mean: 858.1290346173686 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.25919151191565,
            "unit": "iter/sec",
            "range": "stddev: 0.00017092362958674734",
            "extra": "mean: 9.323210308637353 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6774966412602618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012297328697980145",
            "extra": "mean: 1.4760220776000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.98646410992318,
            "unit": "iter/sec",
            "range": "stddev: 0.00006617094339300452",
            "extra": "mean: 8.47554850926239 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.35335606579474,
            "unit": "iter/sec",
            "range": "stddev: 0.00005227770913029955",
            "extra": "mean: 6.563688689392204 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5881.621761225626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004227969915485214",
            "extra": "mean: 170.02113372751424 usec\nrounds: 2535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.69141205043832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683524990795266",
            "extra": "mean: 8.285593672415471 msec\nrounds: 116"
          }
        ]
      }
    ]
  }
}