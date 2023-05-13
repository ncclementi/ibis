window.BENCHMARK_DATA = {
  "lastUpdate": 1683974653619,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "f7f844dd64d5201a64f6c1b5651e85fd7199b0ea",
          "message": "fix(core): interval resolution should upcast to smallest unit\n\nfixes #6139",
          "timestamp": "2023-05-13T12:37:13+02:00",
          "tree_id": "150274b3f964056a5f83a4f1f66a28c1ba586f59",
          "url": "https://github.com/ibis-project/ibis/commit/f7f844dd64d5201a64f6c1b5651e85fd7199b0ea"
        },
        "date": 1683974553369,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 124.3522455050665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007342164272192691",
            "extra": "mean: 8.041672234694442 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 524.1242506891117,
            "unit": "iter/sec",
            "range": "stddev: 0.00019081918293088868",
            "extra": "mean: 1.9079445354516855 msec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.49354499401647,
            "unit": "iter/sec",
            "range": "stddev: 0.0012373315224763497",
            "extra": "mean: 13.072998513511468 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 134.08659038401805,
            "unit": "iter/sec",
            "range": "stddev: 0.005135085473436952",
            "extra": "mean: 7.4578673164560625 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.17341767467884,
            "unit": "iter/sec",
            "range": "stddev: 0.0012607956773176498",
            "extra": "mean: 13.127939253963849 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 78.24044956988267,
            "unit": "iter/sec",
            "range": "stddev: 0.0013691868496016194",
            "extra": "mean: 12.781112653331851 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5822330478054852,
            "unit": "iter/sec",
            "range": "stddev: 0.053891627836679855",
            "extra": "mean: 1.7175253170000133 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 182.88816068923828,
            "unit": "iter/sec",
            "range": "stddev: 0.002066510116128654",
            "extra": "mean: 5.467822499998728 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 204.26627656609563,
            "unit": "iter/sec",
            "range": "stddev: 0.000768020445118712",
            "extra": "mean: 4.895570707073736 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.44929381494502,
            "unit": "iter/sec",
            "range": "stddev: 0.001119890498154971",
            "extra": "mean: 12.58664428571538 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.35031285480005,
            "unit": "iter/sec",
            "range": "stddev: 0.00038236395227463126",
            "extra": "mean: 7.555705600009333 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1500.8118132503687,
            "unit": "iter/sec",
            "range": "stddev: 0.0004158790802336559",
            "extra": "mean: 666.3060559433229 usec\nrounds: 858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.1633899602002,
            "unit": "iter/sec",
            "range": "stddev: 0.0013078700352310581",
            "extra": "mean: 13.483741783333395 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1530487.5857019606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019225669335161377",
            "extra": "mean: 653.3865477525898 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4359724.250402579,
            "unit": "iter/sec",
            "range": "stddev: 9.910059091618124e-7",
            "extra": "mean: 229.3723048902999 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.40596935434249,
            "unit": "iter/sec",
            "range": "stddev: 0.0022765528710260185",
            "extra": "mean: 13.811015982759242 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10737830401225411,
            "unit": "iter/sec",
            "range": "stddev: 0.13628497656209335",
            "extra": "mean: 9.312868266999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.21582600371256,
            "unit": "iter/sec",
            "range": "stddev: 0.002181807224647165",
            "extra": "mean: 14.447562901963527 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1624.9200476276562,
            "unit": "iter/sec",
            "range": "stddev: 0.000150473363572266",
            "extra": "mean: 615.414894695881 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1602.3535833306396,
            "unit": "iter/sec",
            "range": "stddev: 0.00016329757955753566",
            "extra": "mean: 624.0819819065201 usec\nrounds: 1437"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 202.04558301388485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415035183680623",
            "extra": "mean: 4.949378180325172 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.71156437595144,
            "unit": "iter/sec",
            "range": "stddev: 0.00029301088622423773",
            "extra": "mean: 6.724426605263477 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.47264253988686,
            "unit": "iter/sec",
            "range": "stddev: 0.001732545067408868",
            "extra": "mean: 29.87514352380079 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 170.37247774681813,
            "unit": "iter/sec",
            "range": "stddev: 0.000580066907600619",
            "extra": "mean: 5.869492615386207 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.17166161716686,
            "unit": "iter/sec",
            "range": "stddev: 0.001185422533261837",
            "extra": "mean: 10.507329419365965 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 187.14419546115494,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011590371449289",
            "extra": "mean: 5.343473237499197 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 464.68476526964594,
            "unit": "iter/sec",
            "range": "stddev: 0.012487680454174503",
            "extra": "mean: 2.1519965248262936 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.52563543325682,
            "unit": "iter/sec",
            "range": "stddev: 0.0014871133795216595",
            "extra": "mean: 13.24053739188617 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 842221.496936106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048438591106712325",
            "extra": "mean: 1.1873361148318726 usec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5492516.660462626,
            "unit": "iter/sec",
            "range": "stddev: 1.338278730741446e-7",
            "extra": "mean: 182.06590199325976 nsec\nrounds: 57140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4292982.632904049,
            "unit": "iter/sec",
            "range": "stddev: 0.000001068115967653233",
            "extra": "mean: 232.93828219483444 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3379879.1462158724,
            "unit": "iter/sec",
            "range": "stddev: 5.841597589999242e-7",
            "extra": "mean: 295.8685671112914 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1575.9309513011367,
            "unit": "iter/sec",
            "range": "stddev: 0.00020715709578571993",
            "extra": "mean: 634.545567605211 usec\nrounds: 710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 68.6640816561367,
            "unit": "iter/sec",
            "range": "stddev: 0.0016695594086872838",
            "extra": "mean: 14.56365505633508 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 48.46690461415153,
            "unit": "iter/sec",
            "range": "stddev: 0.02587399809469124",
            "extra": "mean: 20.632635980388493 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.64942283954156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092450751142404",
            "extra": "mean: 11.813429630767413 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3196.1236293945713,
            "unit": "iter/sec",
            "range": "stddev: 0.00008635899557885733",
            "extra": "mean: 312.8790109378297 usec\nrounds: 1737"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.36196319399021,
            "unit": "iter/sec",
            "range": "stddev: 0.002634187122457627",
            "extra": "mean: 69.62836392857851 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9378900.06034167,
            "unit": "iter/sec",
            "range": "stddev: 1.0738459021752919e-7",
            "extra": "mean: 106.62231109901926 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.03664175349134,
            "unit": "iter/sec",
            "range": "stddev: 0.0012153248915115682",
            "extra": "mean: 13.151554000003996 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0198189094019416,
            "unit": "iter/sec",
            "range": "stddev: 0.04611899455644996",
            "extra": "mean: 980.5662463999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5073902456317945,
            "unit": "iter/sec",
            "range": "stddev: 0.04005691166845441",
            "extra": "mean: 1.970869579400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 122005.99453171287,
            "unit": "iter/sec",
            "range": "stddev: 0.000010556579190808963",
            "extra": "mean: 8.19631858121587 usec\nrounds: 34481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5456336471000087,
            "unit": "iter/sec",
            "range": "stddev: 0.0416149763195112",
            "extra": "mean: 1.83273155039999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.1524808349962,
            "unit": "iter/sec",
            "range": "stddev: 0.00047730863059160597",
            "extra": "mean: 4.827361931506546 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.7347745701271,
            "unit": "iter/sec",
            "range": "stddev: 0.0024627082897895405",
            "extra": "mean: 13.203974075000957 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.543345549176212,
            "unit": "iter/sec",
            "range": "stddev: 0.001759409199926371",
            "extra": "mean: 44.358988235290674 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.38953364368492,
            "unit": "iter/sec",
            "range": "stddev: 0.003316436471943358",
            "extra": "mean: 26.74545260526136 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.17021368598737,
            "unit": "iter/sec",
            "range": "stddev: 0.002149638977549403",
            "extra": "mean: 36.805010499999675 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1547.8502370176839,
            "unit": "iter/sec",
            "range": "stddev: 0.00016856383493644858",
            "extra": "mean: 646.0573355770822 usec\nrounds: 1040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 75.97705735996328,
            "unit": "iter/sec",
            "range": "stddev: 0.0012577465112841278",
            "extra": "mean: 13.16186799999651 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 193.04100385127344,
            "unit": "iter/sec",
            "range": "stddev: 0.0012320061083664325",
            "extra": "mean: 5.180246579998311 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 195.48122455119608,
            "unit": "iter/sec",
            "range": "stddev: 0.0011223499792370438",
            "extra": "mean: 5.115580804734024 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 176.76645478571393,
            "unit": "iter/sec",
            "range": "stddev: 0.0052901967178819575",
            "extra": "mean: 5.657181964826162 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 156.93231916477035,
            "unit": "iter/sec",
            "range": "stddev: 0.0010951312029203967",
            "extra": "mean: 6.3721737199974395 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5413.603767674184,
            "unit": "iter/sec",
            "range": "stddev: 0.00028227748226333473",
            "extra": "mean: 184.71983597529234 usec\nrounds: 3658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1553.8109922740548,
            "unit": "iter/sec",
            "range": "stddev: 0.00027126862903937226",
            "extra": "mean: 643.5789198121621 usec\nrounds: 1272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 381.23059012885284,
            "unit": "iter/sec",
            "range": "stddev: 0.0006270353698341874",
            "extra": "mean: 2.6230843638806847 msec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1297.2409520464273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002914009935498439",
            "extra": "mean: 770.8668142356107 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 57.065959154477056,
            "unit": "iter/sec",
            "range": "stddev: 0.03024870023543635",
            "extra": "mean: 17.52358174324221 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1461937.0645666944,
            "unit": "iter/sec",
            "range": "stddev: 0.000002935821025238414",
            "extra": "mean: 684.023973560306 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1362093.3209309876,
            "unit": "iter/sec",
            "range": "stddev: 0.000003977959700640633",
            "extra": "mean: 734.1640874624525 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1586.7223630624176,
            "unit": "iter/sec",
            "range": "stddev: 0.00022994225913699551",
            "extra": "mean: 630.2299780220986 usec\nrounds: 910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 75.81276478426572,
            "unit": "iter/sec",
            "range": "stddev: 0.0014682527690718238",
            "extra": "mean: 13.19039086419839 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.15087250230043,
            "unit": "iter/sec",
            "range": "stddev: 0.001637206341263362",
            "extra": "mean: 29.281828741934458 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 578.2579580949009,
            "unit": "iter/sec",
            "range": "stddev: 0.0002304570488513254",
            "extra": "mean: 1.7293320152385776 msec\nrounds: 525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 312.3926036828432,
            "unit": "iter/sec",
            "range": "stddev: 0.00026524169999575157",
            "extra": "mean: 3.2011001163627126 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 81.41085987792893,
            "unit": "iter/sec",
            "range": "stddev: 0.002132426470592483",
            "extra": "mean: 12.283373514288444 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.2045638563162,
            "unit": "iter/sec",
            "range": "stddev: 0.0008062348922739398",
            "extra": "mean: 7.451311425374719 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 40.27334270807654,
            "unit": "iter/sec",
            "range": "stddev: 0.0014726587120922519",
            "extra": "mean: 24.830320324998922 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 76.26591131551277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014468768910447247",
            "extra": "mean: 13.112017974360667 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7781.352481513009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000620083477687796",
            "extra": "mean: 128.51236367659826 usec\nrounds: 4493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1582.6925112633821,
            "unit": "iter/sec",
            "range": "stddev: 0.00018771213134636966",
            "extra": "mean: 631.834669642653 usec\nrounds: 1008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.08658396426584,
            "unit": "iter/sec",
            "range": "stddev: 0.0006361648952366292",
            "extra": "mean: 11.616211887500327 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 58.16464128005669,
            "unit": "iter/sec",
            "range": "stddev: 0.0246482932063486",
            "extra": "mean: 17.192575729730784 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.16947507983253,
            "unit": "iter/sec",
            "range": "stddev: 0.0011320379236134381",
            "extra": "mean: 24.289840909092973 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 140.9039737228377,
            "unit": "iter/sec",
            "range": "stddev: 0.0005774806409411578",
            "extra": "mean: 7.0970319259202 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.956081486302033,
            "unit": "iter/sec",
            "range": "stddev: 0.0012024762568465515",
            "extra": "mean: 35.770392230756 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10805.56286731552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000285677209152907",
            "extra": "mean: 92.54492452445793 usec\nrounds: 4995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.3584329841146,
            "unit": "iter/sec",
            "range": "stddev: 0.001135170951576648",
            "extra": "mean: 12.926838890407048 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9876633177469379,
            "unit": "iter/sec",
            "range": "stddev: 0.09822801336966723",
            "extra": "mean: 1.012490777000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.04981061999493,
            "unit": "iter/sec",
            "range": "stddev: 0.0012606919370913097",
            "extra": "mean: 12.338091753089188 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8711.534128893527,
            "unit": "iter/sec",
            "range": "stddev: 0.000043248971940006834",
            "extra": "mean: 114.79034406618486 usec\nrounds: 3758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1530973.4033488138,
            "unit": "iter/sec",
            "range": "stddev: 0.000004225442875350233",
            "extra": "mean: 653.1792112211907 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.519972477072732,
            "unit": "iter/sec",
            "range": "stddev: 0.003468752557365273",
            "extra": "mean: 153.37488057142374 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.30983507420399,
            "unit": "iter/sec",
            "range": "stddev: 0.0036022994830055724",
            "extra": "mean: 54.6154564444363 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 247.74039977186285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005869731144613491",
            "extra": "mean: 4.036483354837854 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 75.74468617438792,
            "unit": "iter/sec",
            "range": "stddev: 0.0014508172854606097",
            "extra": "mean: 13.202246263159472 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4684024.486399362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011544526643799633",
            "extra": "mean: 213.49162518347487 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.72044965353994,
            "unit": "iter/sec",
            "range": "stddev: 0.0012964102351526673",
            "extra": "mean: 12.543832910450671 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1538.7863624552544,
            "unit": "iter/sec",
            "range": "stddev: 0.00029227091765638634",
            "extra": "mean: 649.8627908323944 usec\nrounds: 1549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9450521998852142,
            "unit": "iter/sec",
            "range": "stddev: 0.01322180943629773",
            "extra": "mean: 514.1250194000008 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}