window.BENCHMARK_DATA = {
  "lastUpdate": 1679687671072,
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
          "id": "42f5987762da25a63a598b5fdf0abc3eea5ae8e0",
          "message": "feat(bigquery): make `to_pyarrow_batches()` smarter",
          "timestamp": "2023-03-24T15:48:51-04:00",
          "tree_id": "e50528d35a707b43ef6e8f850875c977089ad493",
          "url": "https://github.com/ibis-project/ibis/commit/42f5987762da25a63a598b5fdf0abc3eea5ae8e0"
        },
        "date": 1679687594276,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.785618922216818,
            "unit": "iter/sec",
            "range": "stddev: 0.003801616583566076",
            "extra": "mean: 102.19077688889418 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.0065686142577,
            "unit": "iter/sec",
            "range": "stddev: 0.0010453349817875497",
            "extra": "mean: 9.900346222224243 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 161275.99376895555,
            "unit": "iter/sec",
            "range": "stddev: 0.000003509252562288235",
            "extra": "mean: 6.200550848457972 usec\nrounds: 42017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 772.9923758985308,
            "unit": "iter/sec",
            "range": "stddev: 0.00012124572855574034",
            "extra": "mean: 1.293673820311092 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4590.375629170906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008087451610515221",
            "extra": "mean: 217.84709592069174 usec\nrounds: 1814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2156518.1057626796,
            "unit": "iter/sec",
            "range": "stddev: 7.105197197673036e-7",
            "extra": "mean: 463.7104586916221 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.8383025231117,
            "unit": "iter/sec",
            "range": "stddev: 0.0004082450841723425",
            "extra": "mean: 4.034888836065792 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.05539986340165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008290946368246614",
            "extra": "mean: 11.356486956521435 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 510.46676809723687,
            "unit": "iter/sec",
            "range": "stddev: 0.0001507621216500855",
            "extra": "mean: 1.9589913829797314 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.5263228328906,
            "unit": "iter/sec",
            "range": "stddev: 0.00034188106835339596",
            "extra": "mean: 3.5023040610699416 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4658501682264882,
            "unit": "iter/sec",
            "range": "stddev: 0.011953498918769066",
            "extra": "mean: 682.1979638000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4858.993767795048,
            "unit": "iter/sec",
            "range": "stddev: 0.000045546331312477894",
            "extra": "mean: 205.8039272715074 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.12270659491531,
            "unit": "iter/sec",
            "range": "stddev: 0.000670481549616584",
            "extra": "mean: 10.51273702985081 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.50884079059838,
            "unit": "iter/sec",
            "range": "stddev: 0.0004603452767567843",
            "extra": "mean: 6.3087963738317425 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.9524718690276,
            "unit": "iter/sec",
            "range": "stddev: 0.0009426942676531784",
            "extra": "mean: 8.406718954954112 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 261.96374503324245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008122143997085242",
            "extra": "mean: 3.8173221255219993 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 672.0119183897574,
            "unit": "iter/sec",
            "range": "stddev: 0.00017757061779757308",
            "extra": "mean: 1.4880688461540263 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 258.5449211103361,
            "unit": "iter/sec",
            "range": "stddev: 0.0003452100994503113",
            "extra": "mean: 3.8677998225818646 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.86482085684359,
            "unit": "iter/sec",
            "range": "stddev: 0.0207112435685612",
            "extra": "mean: 25.084773454546458 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1687824.418111938,
            "unit": "iter/sec",
            "range": "stddev: 8.582078662301868e-7",
            "extra": "mean: 592.4786898856674 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.3975834550496,
            "unit": "iter/sec",
            "range": "stddev: 0.001037827604021982",
            "extra": "mean: 8.305814546297348 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 116.00470401894763,
            "unit": "iter/sec",
            "range": "stddev: 0.001303609890575513",
            "extra": "mean: 8.620340084111286 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.302462142044151,
            "unit": "iter/sec",
            "range": "stddev: 0.08405913894640515",
            "extra": "mean: 232.4250549999931 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 108.45039729045872,
            "unit": "iter/sec",
            "range": "stddev: 0.0011301098190949217",
            "extra": "mean: 9.220805317307752 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.95954455031564,
            "unit": "iter/sec",
            "range": "stddev: 0.001254387004303153",
            "extra": "mean: 10.105139474359175 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.7406858140888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004597990608200841",
            "extra": "mean: 3.69357120077134 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.78908280404552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005721860844383633",
            "extra": "mean: 8.945417342343658 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1198.578946978063,
            "unit": "iter/sec",
            "range": "stddev: 0.00007577873636265701",
            "extra": "mean: 834.3213457246738 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11266508202782638,
            "unit": "iter/sec",
            "range": "stddev: 0.12326036129225033",
            "extra": "mean: 8.875864482600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 576963.9085607518,
            "unit": "iter/sec",
            "range": "stddev: 6.033368285073747e-7",
            "extra": "mean: 1.7332106656281505 usec\nrounds: 1894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 278.7941258213955,
            "unit": "iter/sec",
            "range": "stddev: 0.00048674704002311573",
            "extra": "mean: 3.5868761476008726 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5803071.675511398,
            "unit": "iter/sec",
            "range": "stddev: 9.567416639370659e-8",
            "extra": "mean: 172.3225312240641 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 288.995594484856,
            "unit": "iter/sec",
            "range": "stddev: 0.00030959721786757695",
            "extra": "mean: 3.460260360655436 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.22562512782542,
            "unit": "iter/sec",
            "range": "stddev: 0.0005016762696108081",
            "extra": "mean: 14.445517799998129 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 78690.97741688098,
            "unit": "iter/sec",
            "range": "stddev: 0.000021588314899015447",
            "extra": "mean: 12.707937209907849 usec\nrounds: 10989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6321343008271664,
            "unit": "iter/sec",
            "range": "stddev: 0.02572903950872852",
            "extra": "mean: 1.5819423162000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2103719.460108478,
            "unit": "iter/sec",
            "range": "stddev: 8.440171913973266e-7",
            "extra": "mean: 475.34855239131315 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.90549009821083,
            "unit": "iter/sec",
            "range": "stddev: 0.0017601774882403762",
            "extra": "mean: 10.213931813189243 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 350.72898324020355,
            "unit": "iter/sec",
            "range": "stddev: 0.00018211923841219532",
            "extra": "mean: 2.851204342342961 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6172058568555953,
            "unit": "iter/sec",
            "range": "stddev: 0.03987418241402039",
            "extra": "mean: 1.6202049751999765 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1731.2187504576304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008105529732979906",
            "extra": "mean: 577.6277548609382 usec\nrounds: 1440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2118297.6187971835,
            "unit": "iter/sec",
            "range": "stddev: 8.450796777610136e-7",
            "extra": "mean: 472.07719591726783 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.6413458740052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003587941895123763",
            "extra": "mean: 3.5632668339929965 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.72417708502692,
            "unit": "iter/sec",
            "range": "stddev: 0.0017394879212075584",
            "extra": "mean: 27.23001791666333 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13423.927928829102,
            "unit": "iter/sec",
            "range": "stddev: 0.000034893568931813905",
            "extra": "mean: 74.49384452164776 usec\nrounds: 7210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.7776122249303,
            "unit": "iter/sec",
            "range": "stddev: 0.0008567266104184365",
            "extra": "mean: 8.279680162393417 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.089458772251994,
            "unit": "iter/sec",
            "range": "stddev: 0.0017805873706739374",
            "extra": "mean: 25.582344483875513 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 116.20454630928114,
            "unit": "iter/sec",
            "range": "stddev: 0.0010147762285391813",
            "extra": "mean: 8.605515289724348 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.83539216161205,
            "unit": "iter/sec",
            "range": "stddev: 0.0011258707220623313",
            "extra": "mean: 38.706592636355126 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.72320023679223,
            "unit": "iter/sec",
            "range": "stddev: 0.0018551528201771967",
            "extra": "mean: 20.524103407412728 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.40915069716895,
            "unit": "iter/sec",
            "range": "stddev: 0.02517681932418326",
            "extra": "mean: 18.37926134090589 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 91.81456499470858,
            "unit": "iter/sec",
            "range": "stddev: 0.0016523060457384376",
            "extra": "mean: 10.891518138300079 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10293.868007914558,
            "unit": "iter/sec",
            "range": "stddev: 0.000028256787135630044",
            "extra": "mean: 97.14521297836136 usec\nrounds: 5409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12455743.862901421,
            "unit": "iter/sec",
            "range": "stddev: 5.667340006388893e-8",
            "extra": "mean: 80.28424564651876 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.84038831773537,
            "unit": "iter/sec",
            "range": "stddev: 0.0008458229508200003",
            "extra": "mean: 9.538308814436492 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 40.95281054737239,
            "unit": "iter/sec",
            "range": "stddev: 0.0015302139815577542",
            "extra": "mean: 24.418348499994757 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.74034373762132,
            "unit": "iter/sec",
            "range": "stddev: 0.0011943956924995887",
            "extra": "mean: 10.667765447916366 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4575.680192624492,
            "unit": "iter/sec",
            "range": "stddev: 0.00008070640382241684",
            "extra": "mean: 218.54674232082334 usec\nrounds: 3256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.885027873127008,
            "unit": "iter/sec",
            "range": "stddev: 0.003877882791105677",
            "extra": "mean: 72.02002107143001 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 203.44803999298824,
            "unit": "iter/sec",
            "range": "stddev: 0.0035011417761054795",
            "extra": "mean: 4.915259935826684 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 152.63716234461256,
            "unit": "iter/sec",
            "range": "stddev: 0.000518576715832551",
            "extra": "mean: 6.551484478873344 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4194.1153884413725,
            "unit": "iter/sec",
            "range": "stddev: 0.00007025015603187408",
            "extra": "mean: 238.4293009095352 usec\nrounds: 1429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.7829271430071,
            "unit": "iter/sec",
            "range": "stddev: 0.0009825164109143606",
            "extra": "mean: 9.364792919197356 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 216.65015359198716,
            "unit": "iter/sec",
            "range": "stddev: 0.00044371651077793354",
            "extra": "mean: 4.6157363999994185 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 139.6314117401574,
            "unit": "iter/sec",
            "range": "stddev: 0.004312440366735017",
            "extra": "mean: 7.1617123076927545 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3986.1588343730227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006197573958322186",
            "extra": "mean: 250.86807664985795 usec\nrounds: 1683"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.94512663067803,
            "unit": "iter/sec",
            "range": "stddev: 0.0008879399158598794",
            "extra": "mean: 7.249259357145038 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.4319369296836,
            "unit": "iter/sec",
            "range": "stddev: 0.0015250130173492572",
            "extra": "mean: 12.914567808217246 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.44813226531494,
            "unit": "iter/sec",
            "range": "stddev: 0.0017629209792149366",
            "extra": "mean: 13.254138571429163 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3653.657038731957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011435105571213489",
            "extra": "mean: 273.69837655782305 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6528.399339412848,
            "unit": "iter/sec",
            "range": "stddev: 0.00004879278194866254",
            "extra": "mean: 153.1769041705004 usec\nrounds: 4028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5532455.6971794935,
            "unit": "iter/sec",
            "range": "stddev: 3.313021024572759e-7",
            "extra": "mean: 180.75156038034729 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.73670587581276,
            "unit": "iter/sec",
            "range": "stddev: 0.0013348473843152863",
            "extra": "mean: 12.23440545205427 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6033805.135460175,
            "unit": "iter/sec",
            "range": "stddev: 1.186637647064968e-7",
            "extra": "mean: 165.73289616580567 nsec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3918.105898557004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001914230518127086",
            "extra": "mean: 255.22536294087638 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6651896201218526,
            "unit": "iter/sec",
            "range": "stddev: 0.01400907639968585",
            "extra": "mean: 1.5033307341999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.5688770309424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006684078763224008",
            "extra": "mean: 7.06369945833103 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6206242790559952,
            "unit": "iter/sec",
            "range": "stddev: 0.02537601787316356",
            "extra": "mean: 1.6112808244000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 116.46205075855478,
            "unit": "iter/sec",
            "range": "stddev: 0.0010545117281089",
            "extra": "mean: 8.586487988891475 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 791111.0387274892,
            "unit": "iter/sec",
            "range": "stddev: 0.000004393539561159967",
            "extra": "mean: 1.2640450594754828 usec\nrounds: 25189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.2050963557355,
            "unit": "iter/sec",
            "range": "stddev: 0.0015665542098571013",
            "extra": "mean: 14.661660981817644 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3814799082371225,
            "unit": "iter/sec",
            "range": "stddev: 0.008393651378480492",
            "extra": "mean: 419.9069647999863 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12209.257836350213,
            "unit": "iter/sec",
            "range": "stddev: 0.000030130656945673558",
            "extra": "mean: 81.90506035696401 usec\nrounds: 7058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.85606541078046,
            "unit": "iter/sec",
            "range": "stddev: 0.0010378051027904174",
            "extra": "mean: 8.783019124998807 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4705.77663397866,
            "unit": "iter/sec",
            "range": "stddev: 0.00008192905608050315",
            "extra": "mean: 212.50477397914992 usec\nrounds: 3451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.25175417217963,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573049350661271",
            "extra": "mean: 7.285881379304775 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 247.4704470275237,
            "unit": "iter/sec",
            "range": "stddev: 0.0005075971834023485",
            "extra": "mean: 4.040886546298515 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4046.4321991371207,
            "unit": "iter/sec",
            "range": "stddev: 0.000304117253948067",
            "extra": "mean: 247.13128770902046 usec\nrounds: 1790"
          }
        ]
      }
    ]
  }
}