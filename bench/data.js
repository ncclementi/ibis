window.BENCHMARK_DATA = {
  "lastUpdate": 1678973471483,
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
          "id": "7d29c638eecc45c78480b4b6080ccabd7e9399bd",
          "message": "chore: improve the error message for invalid deferred expressions",
          "timestamp": "2023-03-16T09:25:30-04:00",
          "tree_id": "01b933f073377992a12cdc93ed7f248d92d8ccf6",
          "url": "https://github.com/ibis-project/ibis/commit/7d29c638eecc45c78480b4b6080ccabd7e9399bd"
        },
        "date": 1678973383861,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.97048678901933,
            "unit": "iter/sec",
            "range": "stddev: 0.00027372274233143293",
            "extra": "mean: 14.09036411110994 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.57389213293102,
            "unit": "iter/sec",
            "range": "stddev: 0.005779949427609321",
            "extra": "mean: 8.96267021686922 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.6581618831005,
            "unit": "iter/sec",
            "range": "stddev: 0.000028544169425862062",
            "extra": "mean: 3.0707045517224403 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 729461.107617028,
            "unit": "iter/sec",
            "range": "stddev: 2.536174761730963e-7",
            "extra": "mean: 1.3708750056144277 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.94814429617142,
            "unit": "iter/sec",
            "range": "stddev: 0.000617644083319328",
            "extra": "mean: 8.775921768421457 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4549.229026928639,
            "unit": "iter/sec",
            "range": "stddev: 0.000038783159200173705",
            "extra": "mean: 219.817466669762 usec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.48396255303812,
            "unit": "iter/sec",
            "range": "stddev: 0.01436009675102798",
            "extra": "mean: 30.78442164705898 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.04259064943582,
            "unit": "iter/sec",
            "range": "stddev: 0.004125753036443924",
            "extra": "mean: 4.131504283262103 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139663.88090415118,
            "unit": "iter/sec",
            "range": "stddev: 5.072281111120005e-7",
            "extra": "mean: 7.160047347433242 usec\nrounds: 35588"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.043960312786,
            "unit": "iter/sec",
            "range": "stddev: 0.00008418552746584492",
            "extra": "mean: 8.471420285716087 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1662173.217883571,
            "unit": "iter/sec",
            "range": "stddev: 1.1005112940142428e-7",
            "extra": "mean: 601.622014625702 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1822943.160484888,
            "unit": "iter/sec",
            "range": "stddev: 1.0970962101128136e-7",
            "extra": "mean: 548.5634558863636 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5180.18791177124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411144924613114",
            "extra": "mean: 193.04319013749335 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.8464933381888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006262572468032748",
            "extra": "mean: 8.414215446428079 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.55057609538426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167278857857818",
            "extra": "mean: 8.435218393164224 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.9756070767498,
            "unit": "iter/sec",
            "range": "stddev: 0.0001569285527027392",
            "extra": "mean: 6.945620999999846 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.54447103355146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005827045228968311",
            "extra": "mean: 9.657686113206088 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.300226522066838,
            "unit": "iter/sec",
            "range": "stddev: 0.00034925120886530604",
            "extra": "mean: 97.08524349999834 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6705758893103746,
            "unit": "iter/sec",
            "range": "stddev: 0.001821744783357857",
            "extra": "mean: 1.4912555252000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.0615031497568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005323358758025562",
            "extra": "mean: 8.844743543480396 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.8721648174812,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454572486154006",
            "extra": "mean: 3.280063303249325 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5631.300705987468,
            "unit": "iter/sec",
            "range": "stddev: 0.000043290229503624994",
            "extra": "mean: 177.57886715883458 usec\nrounds: 2168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.1254978372539,
            "unit": "iter/sec",
            "range": "stddev: 0.00019808202021118484",
            "extra": "mean: 3.331939495997972 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.87567428239785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005568770461576003",
            "extra": "mean: 9.356666114289933 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.30640227277013,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220808784410552",
            "extra": "mean: 2.830404412620721 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.28386343731752,
            "unit": "iter/sec",
            "range": "stddev: 0.000305829491425875",
            "extra": "mean: 15.317720909090388 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.92217792981654,
            "unit": "iter/sec",
            "range": "stddev: 0.00020529186629661024",
            "extra": "mean: 3.1956827304975617 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.45052142375279,
            "unit": "iter/sec",
            "range": "stddev: 0.000591451302120727",
            "extra": "mean: 9.857021787232217 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8050.116036681408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000247185779684851",
            "extra": "mean: 124.22181188983726 usec\nrounds: 4609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.9926314154398,
            "unit": "iter/sec",
            "range": "stddev: 0.0006316844558108852",
            "extra": "mean: 10.753540197529752 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.1014114145377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006681538571829943",
            "extra": "mean: 8.326296820513091 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7629155273565325,
            "unit": "iter/sec",
            "range": "stddev: 0.0016203439657427542",
            "extra": "mean: 567.2421533999909 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.64090681428645,
            "unit": "iter/sec",
            "range": "stddev: 0.0006693992693212787",
            "extra": "mean: 8.289062362067545 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5883.857375490469,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044498335886258",
            "extra": "mean: 169.95653296518623 usec\nrounds: 2715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.6019271450775,
            "unit": "iter/sec",
            "range": "stddev: 0.00004870944745971088",
            "extra": "mean: 1.4543298389985597 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11863.288709650971,
            "unit": "iter/sec",
            "range": "stddev: 0.000002118515766005988",
            "extra": "mean: 84.2936578949212 usec\nrounds: 4864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1840700.1561537439,
            "unit": "iter/sec",
            "range": "stddev: 9.275959735937582e-8",
            "extra": "mean: 543.2715353757352 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.54911387755678,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960031029877634",
            "extra": "mean: 23.502252076922012 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13341.007387152451,
            "unit": "iter/sec",
            "range": "stddev: 0.000002355722852761661",
            "extra": "mean: 74.9568582776599 usec\nrounds: 6294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6177526611833244,
            "unit": "iter/sec",
            "range": "stddev: 0.0017966202024775532",
            "extra": "mean: 382.00706079999236 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.515678890256194,
            "unit": "iter/sec",
            "range": "stddev: 0.0004286553101793897",
            "extra": "mean: 64.45093424999904 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5857494.407630482,
            "unit": "iter/sec",
            "range": "stddev: 9.68059691247271e-9",
            "extra": "mean: 170.7214604759382 nsec\nrounds: 188715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.5595211452774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010919889378994876",
            "extra": "mean: 1.839724926339262 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.3731469211915,
            "unit": "iter/sec",
            "range": "stddev: 0.000012353742943011297",
            "extra": "mean: 1.3398124036549623 msec\nrounds: 602"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.3578845165765,
            "unit": "iter/sec",
            "range": "stddev: 0.00020720968102172396",
            "extra": "mean: 3.264156238635639 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.929946858741008,
            "unit": "iter/sec",
            "range": "stddev: 0.003080459772015896",
            "extra": "mean: 1.0753302627999972 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.163720103148,
            "unit": "iter/sec",
            "range": "stddev: 0.00021400196847450406",
            "extra": "mean: 3.193217910652696 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.15919807332233,
            "unit": "iter/sec",
            "range": "stddev: 0.00030296845401891077",
            "extra": "mean: 38.22747154546071 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.3850830872481,
            "unit": "iter/sec",
            "range": "stddev: 0.00006085353452084422",
            "extra": "mean: 9.059195065420228 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.23062166066384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006473952852312387",
            "extra": "mean: 9.502937303028487 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11676.963000495405,
            "unit": "iter/sec",
            "range": "stddev: 0.000012405582412667946",
            "extra": "mean: 85.63870588247767 usec\nrounds: 5712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8497556274551167,
            "unit": "iter/sec",
            "range": "stddev: 0.0012672679453157526",
            "extra": "mean: 1.176808917399984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.6593266661528,
            "unit": "iter/sec",
            "range": "stddev: 0.000014467055850667004",
            "extra": "mean: 852.7625860811427 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.6775209864078,
            "unit": "iter/sec",
            "range": "stddev: 0.000025693136238118744",
            "extra": "mean: 5.190019027027775 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.9184199879314,
            "unit": "iter/sec",
            "range": "stddev: 0.00003743115357390869",
            "extra": "mean: 3.425614594794472 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5559.515999320659,
            "unit": "iter/sec",
            "range": "stddev: 0.00004516281162168394",
            "extra": "mean: 179.8717730324356 usec\nrounds: 2084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.92252455239401,
            "unit": "iter/sec",
            "range": "stddev: 0.00007532756439395249",
            "extra": "mean: 10.317519117647661 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.8799838293779,
            "unit": "iter/sec",
            "range": "stddev: 0.0041791461069905595",
            "extra": "mean: 5.921364849314029 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.93850686114396,
            "unit": "iter/sec",
            "range": "stddev: 0.00029160772558862216",
            "extra": "mean: 20.860057300001955 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.75644224835487,
            "unit": "iter/sec",
            "range": "stddev: 0.00017188734769154162",
            "extra": "mean: 9.73174993333335 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1785020575845424,
            "unit": "iter/sec",
            "range": "stddev: 0.11032687208451274",
            "extra": "mean: 5.602176319600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.8576763337959,
            "unit": "iter/sec",
            "range": "stddev: 0.00020773589853134114",
            "extra": "mean: 3.176038175864105 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.27422273714187,
            "unit": "iter/sec",
            "range": "stddev: 0.000677697728910582",
            "extra": "mean: 9.972652718748995 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.36870110965731,
            "unit": "iter/sec",
            "range": "stddev: 0.0006314412153560694",
            "extra": "mean: 9.864977937501962 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.91179135586225,
            "unit": "iter/sec",
            "range": "stddev: 0.0003913089152315497",
            "extra": "mean: 7.412250552379517 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5390.689498568239,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850696691725298",
            "extra": "mean: 185.50502681810903 usec\nrounds: 2461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.3157002902455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000859836566075402",
            "extra": "mean: 6.356644620689559 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13079232.67065053,
            "unit": "iter/sec",
            "range": "stddev: 9.875572957426028e-9",
            "extra": "mean: 76.45708469142991 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6433863.451745696,
            "unit": "iter/sec",
            "range": "stddev: 1.007209764847323e-8",
            "extra": "mean: 155.42760698918323 nsec\nrounds: 196117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.54375712495565,
            "unit": "iter/sec",
            "range": "stddev: 0.0003260012801063046",
            "extra": "mean: 10.577112972973245 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.2694064624177,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895409454754824",
            "extra": "mean: 8.38437978070348 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.87221278567219,
            "unit": "iter/sec",
            "range": "stddev: 0.00023740830338719684",
            "extra": "mean: 17.89798452830275 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5557.130880076338,
            "unit": "iter/sec",
            "range": "stddev: 0.00006868158799652528",
            "extra": "mean: 179.94897395439122 usec\nrounds: 2534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 471457.8123172433,
            "unit": "iter/sec",
            "range": "stddev: 3.0645517361456784e-7",
            "extra": "mean: 2.1210805587989734 usec\nrounds: 1862"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2527144.3028142406,
            "unit": "iter/sec",
            "range": "stddev: 1.840836210101797e-8",
            "extra": "mean: 395.7035610852323 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9215387167942012,
            "unit": "iter/sec",
            "range": "stddev: 0.0034364381360578564",
            "extra": "mean: 1.0851416025999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 294.2804622742606,
            "unit": "iter/sec",
            "range": "stddev: 0.00023958429973954223",
            "extra": "mean: 3.398118897434753 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1756.5450720723577,
            "unit": "iter/sec",
            "range": "stddev: 0.000005540951190080747",
            "extra": "mean: 569.2993683448202 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5646.3945761519035,
            "unit": "iter/sec",
            "range": "stddev: 0.00005372388065146313",
            "extra": "mean: 177.1041655897725 usec\nrounds: 2784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5669.64687709054,
            "unit": "iter/sec",
            "range": "stddev: 0.00005228110488932112",
            "extra": "mean: 176.37782769870918 usec\nrounds: 3343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.75982924759208,
            "unit": "iter/sec",
            "range": "stddev: 0.00007445294053517875",
            "extra": "mean: 13.743847537040422 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.6218573489533,
            "unit": "iter/sec",
            "range": "stddev: 0.030944343869590666",
            "extra": "mean: 32.65641233333554 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.478288141197988,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453209565906681",
            "extra": "mean: 182.53877383333852 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.00402751539022,
            "unit": "iter/sec",
            "range": "stddev: 0.00006813323822248711",
            "extra": "mean: 6.172686045752789 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69773.76874531769,
            "unit": "iter/sec",
            "range": "stddev: 5.160014755412642e-7",
            "extra": "mean: 14.332033627853976 usec\nrounds: 13352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.3395667420815,
            "unit": "iter/sec",
            "range": "stddev: 0.00027493002166215265",
            "extra": "mean: 3.5927339102551397 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.18105808612127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803945612855756",
            "extra": "mean: 9.598673869998038 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7427920.098993131,
            "unit": "iter/sec",
            "range": "stddev: 8.2706701358428e-9",
            "extra": "mean: 134.62718859023286 nsec\nrounds: 61350"
          }
        ]
      }
    ]
  }
}