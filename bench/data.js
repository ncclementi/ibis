window.BENCHMARK_DATA = {
  "lastUpdate": 1677771386458,
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
          "id": "cb3a90c7d7678d96fbc36a21226e683a6a71f790",
          "message": "fix(util): make convert_unit work with python types",
          "timestamp": "2023-03-02T10:29:44-05:00",
          "tree_id": "fb9f2cca3aa98f352b35716d20f02d170a9308e9",
          "url": "https://github.com/ibis-project/ibis/commit/cb3a90c7d7678d96fbc36a21226e683a6a71f790"
        },
        "date": 1677771289546,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.880770336119096,
            "unit": "iter/sec",
            "range": "stddev: 0.0030781202172424586",
            "extra": "mean: 126.89114862500261 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 234.03464242596164,
            "unit": "iter/sec",
            "range": "stddev: 0.0003483907704908046",
            "extra": "mean: 4.272871698113481 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1542688.0473888635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017441426676022004",
            "extra": "mean: 648.2191922680602 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1114732109890415,
            "unit": "iter/sec",
            "range": "stddev: 0.10487901191662051",
            "extra": "mean: 8.97076518319999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9502740.891734554,
            "unit": "iter/sec",
            "range": "stddev: 2.085566060572956e-7",
            "extra": "mean: 105.23279666284691 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 76.11835423970479,
            "unit": "iter/sec",
            "range": "stddev: 0.0014455462908516696",
            "extra": "mean: 13.137435904760812 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 59.668374850532246,
            "unit": "iter/sec",
            "range": "stddev: 0.018152073645940407",
            "extra": "mean: 16.75929673809576 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 226.21773686406132,
            "unit": "iter/sec",
            "range": "stddev: 0.0005901079805506343",
            "extra": "mean: 4.420519866666863 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 110.62843550591415,
            "unit": "iter/sec",
            "range": "stddev: 0.0009905375265220572",
            "extra": "mean: 9.039267304349977 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.73189909554224,
            "unit": "iter/sec",
            "range": "stddev: 0.0018464779435905276",
            "extra": "mean: 18.610918594592594 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.01892951794508,
            "unit": "iter/sec",
            "range": "stddev: 0.0022459169059221035",
            "extra": "mean: 31.231525071428376 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 222.99467216267834,
            "unit": "iter/sec",
            "range": "stddev: 0.000496236752506487",
            "extra": "mean: 4.484412072726487 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 149.0361160377142,
            "unit": "iter/sec",
            "range": "stddev: 0.0010784367656779977",
            "extra": "mean: 6.709783014923348 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10537.833090081891,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147618171909414",
            "extra": "mean: 94.89616996697268 usec\nrounds: 8131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.57550532866808,
            "unit": "iter/sec",
            "range": "stddev: 0.0007690958397819617",
            "extra": "mean: 17.368497146339045 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 570.6596493941431,
            "unit": "iter/sec",
            "range": "stddev: 0.0003026897589526994",
            "extra": "mean: 1.752357996682748 msec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.614428637928572,
            "unit": "iter/sec",
            "range": "stddev: 0.017610079768708903",
            "extra": "mean: 1.627528305599992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.57381191170182,
            "unit": "iter/sec",
            "range": "stddev: 0.001550922496962318",
            "extra": "mean: 51.08866911110807 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 220.92444240210756,
            "unit": "iter/sec",
            "range": "stddev: 0.00029994702889953983",
            "extra": "mean: 4.526434418604921 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.773154415160437,
            "unit": "iter/sec",
            "range": "stddev: 0.003151877070612025",
            "extra": "mean: 84.93900315384359 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.89520246638357,
            "unit": "iter/sec",
            "range": "stddev: 0.001081643242570493",
            "extra": "mean: 9.26825268539225 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.7757550778979,
            "unit": "iter/sec",
            "range": "stddev: 0.004303262194899441",
            "extra": "mean: 7.5886493642845005 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5799.5093614933,
            "unit": "iter/sec",
            "range": "stddev: 0.000018715768067416772",
            "extra": "mean: 172.42837931078236 usec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3868.007939286085,
            "unit": "iter/sec",
            "range": "stddev: 0.00011192754465048143",
            "extra": "mean: 258.53101019864226 usec\nrounds: 1863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1334.9855085732645,
            "unit": "iter/sec",
            "range": "stddev: 0.00018014506129751772",
            "extra": "mean: 749.071801587365 usec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 522.0873212501936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989359533578447",
            "extra": "mean: 1.915388402088359 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3614.1721996300785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000678953522180747",
            "extra": "mean: 276.6885319139893 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3774.0609312375655,
            "unit": "iter/sec",
            "range": "stddev: 0.00009697293577496711",
            "extra": "mean: 264.9665753202576 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4646799.612490959,
            "unit": "iter/sec",
            "range": "stddev: 6.798809685489592e-7",
            "extra": "mean: 215.20187729021495 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.563879941493624,
            "unit": "iter/sec",
            "range": "stddev: 0.0015576523452338516",
            "extra": "mean: 33.82505956521883 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3739.766729385025,
            "unit": "iter/sec",
            "range": "stddev: 0.00012014240214920839",
            "extra": "mean: 267.39635714242587 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2232506181776952,
            "unit": "iter/sec",
            "range": "stddev: 0.006277151177832249",
            "extra": "mean: 817.4939666000114 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 910.9080132376482,
            "unit": "iter/sec",
            "range": "stddev: 0.00014700974435586663",
            "extra": "mean: 1.0978056900012234 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1399994.4406339105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034383100043151365",
            "extra": "mean: 714.2885507082478 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 226.60271650256135,
            "unit": "iter/sec",
            "range": "stddev: 0.00048370747022731997",
            "extra": "mean: 4.413009761905024 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.74587141552145,
            "unit": "iter/sec",
            "range": "stddev: 0.0008636209909916805",
            "extra": "mean: 12.862419338711748 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.07771990763285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006131144309858616",
            "extra": "mean: 7.995029016666423 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4143882.8969474756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010018730507192432",
            "extra": "mean: 241.3195606316893 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.07531728800483,
            "unit": "iter/sec",
            "range": "stddev: 0.0018824666204669083",
            "extra": "mean: 23.21515111110904 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59956.06700952027,
            "unit": "iter/sec",
            "range": "stddev: 0.000017638042171400408",
            "extra": "mean: 16.678879217364482 usec\nrounds: 12063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.267248261425412,
            "unit": "iter/sec",
            "range": "stddev: 0.004586603290614542",
            "extra": "mean: 234.34305639999593 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 125.88445563926591,
            "unit": "iter/sec",
            "range": "stddev: 0.00046956534685025123",
            "extra": "mean: 7.94379254310474 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8406.503861878167,
            "unit": "iter/sec",
            "range": "stddev: 0.00010236633930855365",
            "extra": "mean: 118.95551544736716 usec\nrounds: 6247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 231.6405061845075,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528866466709651",
            "extra": "mean: 4.3170342548097995 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5141995055535058,
            "unit": "iter/sec",
            "range": "stddev: 0.01578904126525896",
            "extra": "mean: 1.9447704426000143 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.35712162608787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010334169157714419",
            "extra": "mean: 11.996575463409894 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9124538955990622,
            "unit": "iter/sec",
            "range": "stddev: 0.0033997745241065532",
            "extra": "mean: 522.8884221999806 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.747204544866534,
            "unit": "iter/sec",
            "range": "stddev: 0.0019327438190323378",
            "extra": "mean: 19.324715388885732 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 227.2737751945107,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312813229233834",
            "extra": "mean: 4.399979712327816 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.9921998756523,
            "unit": "iter/sec",
            "range": "stddev: 0.015939333669290706",
            "extra": "mean: 10.989952999999728 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 408664.95308713673,
            "unit": "iter/sec",
            "range": "stddev: 0.000001944831776902389",
            "extra": "mean: 2.4469923159443945 usec\nrounds: 1822"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3911.3367037339085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944496186484974",
            "extra": "mean: 255.66707132253853 usec\nrounds: 2692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.64004840297282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006567741767659102",
            "extra": "mean: 11.155728023534131 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.27683475833565,
            "unit": "iter/sec",
            "range": "stddev: 0.001131808974088721",
            "extra": "mean: 9.682713479164681 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6190698139444902,
            "unit": "iter/sec",
            "range": "stddev: 0.015568682595099526",
            "extra": "mean: 1.6153267005999852 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.581794499371685,
            "unit": "iter/sec",
            "range": "stddev: 0.014322391493057104",
            "extra": "mean: 1.7188199631999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.54681672672666,
            "unit": "iter/sec",
            "range": "stddev: 0.0010638891525326412",
            "extra": "mean: 12.571213294874859 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2109165.313241842,
            "unit": "iter/sec",
            "range": "stddev: 5.633031875486591e-7",
            "extra": "mean: 474.1212050669121 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120763.81782017919,
            "unit": "iter/sec",
            "range": "stddev: 0.000016540712656495588",
            "extra": "mean: 8.280625919669324 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 109.18687323526423,
            "unit": "iter/sec",
            "range": "stddev: 0.0011104305522981147",
            "extra": "mean: 9.158610100000818 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.60288761214226,
            "unit": "iter/sec",
            "range": "stddev: 0.029310107588672273",
            "extra": "mean: 34.96150506061102 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3578.4308886570575,
            "unit": "iter/sec",
            "range": "stddev: 0.00009898910241650573",
            "extra": "mean: 279.45209258331886 usec\nrounds: 1955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.9379055275906,
            "unit": "iter/sec",
            "range": "stddev: 0.001352106648822466",
            "extra": "mean: 12.355150451219842 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 210.59336067325432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008775614667539517",
            "extra": "mean: 4.7484877813956725 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3607.2490005669265,
            "unit": "iter/sec",
            "range": "stddev: 0.00011945832290347838",
            "extra": "mean: 277.2195653371411 usec\nrounds: 1806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.87617568543408,
            "unit": "iter/sec",
            "range": "stddev: 0.00044263347697087605",
            "extra": "mean: 13.53616359701693 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.71073219361323,
            "unit": "iter/sec",
            "range": "stddev: 0.0016829359132727014",
            "extra": "mean: 29.66414358064456 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.43530849496153,
            "unit": "iter/sec",
            "range": "stddev: 0.0050572107014472895",
            "extra": "mean: 5.306861054793977 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 396.41482706140755,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587855583463707",
            "extra": "mean: 2.522609982610698 msec\nrounds: 345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 203.22280524644833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005291025505242626",
            "extra": "mean: 4.920707588832364 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1481431.448126499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030994231561675173",
            "extra": "mean: 675.0227972172833 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3661.201407944021,
            "unit": "iter/sec",
            "range": "stddev: 0.00011782097505911035",
            "extra": "mean: 273.1343863875434 usec\nrounds: 1910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5391919.840220105,
            "unit": "iter/sec",
            "range": "stddev: 1.6614178886535645e-7",
            "extra": "mean: 185.46269782069476 nsec\nrounds: 49262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 64.40843880257323,
            "unit": "iter/sec",
            "range": "stddev: 0.02406394426561799",
            "extra": "mean: 15.525915836358514 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9829.122316175242,
            "unit": "iter/sec",
            "range": "stddev: 0.000035896665945607825",
            "extra": "mean: 101.73848364409459 usec\nrounds: 5686"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.06015346540633,
            "unit": "iter/sec",
            "range": "stddev: 0.00173908474395915",
            "extra": "mean: 13.147488592102562 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 92.42555317698142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895151028846358",
            "extra": "mean: 10.819518689654432 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3586.4478138774325,
            "unit": "iter/sec",
            "range": "stddev: 0.00009031215126889212",
            "extra": "mean: 278.82742253507536 usec\nrounds: 2201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.7285186123695,
            "unit": "iter/sec",
            "range": "stddev: 0.017730035094366613",
            "extra": "mean: 14.138568425001807 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 148.31692296441094,
            "unit": "iter/sec",
            "range": "stddev: 0.000500687370180979",
            "extra": "mean: 6.742318947919064 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.3369125249486,
            "unit": "iter/sec",
            "range": "stddev: 0.0007456984017152032",
            "extra": "mean: 4.754277259258465 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 108.03914876340018,
            "unit": "iter/sec",
            "range": "stddev: 0.0013706979781628766",
            "extra": "mean: 9.255904100003095 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.58615937454881,
            "unit": "iter/sec",
            "range": "stddev: 0.0006222147454913773",
            "extra": "mean: 9.65379936893095 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.82853257240396,
            "unit": "iter/sec",
            "range": "stddev: 0.0003828735170525385",
            "extra": "mean: 3.7903406058841056 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 642985.3398659342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015050941656718522",
            "extra": "mean: 1.5552454122958776 usec\nrounds: 20162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 109.70900982569765,
            "unit": "iter/sec",
            "range": "stddev: 0.0010456466343462846",
            "extra": "mean: 9.115021652175784 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 101.40002846930935,
            "unit": "iter/sec",
            "range": "stddev: 0.0013091264455389949",
            "extra": "mean: 9.86193016999664 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.48863818154763,
            "unit": "iter/sec",
            "range": "stddev: 0.001092046566199363",
            "extra": "mean: 9.13336777777671 msec\nrounds: 108"
          }
        ]
      }
    ]
  }
}